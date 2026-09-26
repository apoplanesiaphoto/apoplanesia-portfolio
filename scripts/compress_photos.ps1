Add-Type -AssemblyName System.Drawing

$galleryDir = "C:\Users\evasn\Desktop\Nova pasta\apoplanesia-portfolio\public\assets\gallery"
$categories = @("boudoir", "casais", "eventos", "maternidade", "retrato")

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

$maxDim = 1920
$totalProcessed = 0
$totalSavedBytes = 0

foreach ($cat in $categories) {
    $dir = Join-Path $galleryDir $cat
    if (-not (Test-Path $dir)) { continue }

    $files = Get-ChildItem -Path $dir -Filter "*.jpg"
    Write-Host "Compressing $($files.Count) photos in $cat..."

    foreach ($file in $files) {
        $srcPath = $file.FullName
        $tempPath = "$($file.FullName).tmp.jpg"
        $origLength = $file.Length

        try {
            $img = [System.Drawing.Image]::FromFile($srcPath)

            # Check EXIF orientation
            if ($img.PropertyIdList -contains 274) {
                try {
                    $prop = $img.GetPropertyItem(274)
                    $val = [BitConverter]::ToUInt16($prop.Value, 0)
                    if ($val -eq 3) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                    elseif ($val -eq 6) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                    elseif ($val -eq 8) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
                } catch {}
            }

            $scale = 1.0
            if ($img.Width -gt $maxDim -or $img.Height -gt $maxDim) {
                if ($img.Width -gt $img.Height) {
                    $scale = $maxDim / $img.Width
                } else {
                    $scale = $maxDim / $img.Height
                }
            }

            $newW = [int]($img.Width * $scale)
            $newH = [int]($img.Height * $scale)

            $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
            $graph = [System.Drawing.Graphics]::FromImage($bmp)
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

            $graph.DrawImage($img, 0, 0, $newW, $newH)

            $bmp.Save($tempPath, $codec, $encoderParams)

            $graph.Dispose()
            $bmp.Dispose()
            $img.Dispose()

            $newLength = (Get-Item $tempPath).Length
            $totalSavedBytes += ($origLength - $newLength)
            $totalProcessed++

            # Replace original file with compressed file
            Move-Item -Path $tempPath -Destination $srcPath -Force
        } catch {
            Write-Warning "Failed on $($file.Name): $_"
            if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
            if ($img) { $img.Dispose() }
        }
    }
}

$savedMB = [math]::Round($totalSavedBytes / 1MB, 2)
Write-Host "Done! Successfully compressed $totalProcessed photos. Total space saved: $savedMB MB!"
