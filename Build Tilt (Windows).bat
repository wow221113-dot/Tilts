@echo off
cd /d "%~dp0"
echo Building Tilt. This takes a few minutes...
call npm install
call npm run dist
echo Done. Open the dist folder and run the Tilt Setup file.
pause
