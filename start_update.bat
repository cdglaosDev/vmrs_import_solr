REM get current day
for /f %%a in ('date /t') do set DAY=%%a 
echo Today is %Day%

if %Day%==Mon goto runscript
if %Day%==Tue goto runscript
if %Day%==Wed goto runscript
if %Day%==Thu goto runscript
if %Day%==Fri goto runscript
if %Day%==Sat goto runscript
goto notrun

:runscript
echo Run script!
timeout 5
exit

:notrun
echo Not run script!
timeout 5
exit
