@echo off
title Apoplanesia Photo - Preview do Site
cd /d "%~dp0"
echo ===================================================
echo   Apoplanesia Photo - Pre-visualizacao do Site
echo ===================================================
echo.
node ./node_modules/vite/bin/vite.js preview --open
pause