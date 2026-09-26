@echo off
title Apoplanesia Photo - Build de Producao
cd /d "%~dp0"
echo ===================================================
echo   Apoplanesia Photo - A compilar site para producao
echo ===================================================
echo.
agy-node ./node_modules/vite/bin/vite.js build
echo.
echo Compilacao terminada com sucesso! Os ficheiros estao na pasta 'dist'.
pause
