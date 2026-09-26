@echo off
title Apoplanesia Photo - Dev Server
cd /d "%~dp0"
echo ===================================================
echo   Apoplanesia Photo - Servidor de Desenvolvimento
echo ===================================================
echo.
agy-node ./node_modules/vite/bin/vite.js --open
pause
