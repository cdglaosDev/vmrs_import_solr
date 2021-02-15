if /i "Mon"=="Mon" goto runscript
goto notrun

:runscript
echo Hello!!!!
timeout 10
exit

:notrun
echo Bye!!!!
timeout 10
exit

