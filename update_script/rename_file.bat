@echo off
setlocal EnableExtensions DisableDelayedExpansion
if "%~1" == "" (
    rem Get local date and time in a region independent format.
    for /F "tokens=2 delims==." %%I in ('%SystemRoot%\System32\wbem\wmic.exe OS get LocalDateTime /VALUE') do set "LocalDateTime=%%I"
) else (
    rem This is for fast testing determining the date of yesterday from any
    rem date specified as parameter in format yyyyMMdd on calling this batch
    rem file from within a command prompt window. The parameter string is
    rem not validated at all as this is just for testing the code below.
    set "LocalDateTime=%~1"
)

rem Get day, month and year from the local date/time string (or parameter).
set "Day=%LocalDateTime:~6,2%"
set "Month=%LocalDateTime:~4,2%"
set "Year=%LocalDateTime:~0,4%"

rem Define a variable with today's date in format MM/dd/yyyy.
set "Today=%Year%-%Month%-%Day%"

rem Decrease the day in month by 1 in any case.

rem It is necessary to remove leading 0 for the days 08 and 09 as
rem those two days would be otherwise interpreted as invalid octal
rem numbers and decreased result would be -1 instead of 7 and 8.
rem if "%Day:~0,1%" == "0" set "Day=%Day:~1%"
rem set /A Day-=1

rem Faster is concatenating character 1 with the day string to string
rem representing 101 to 131 and subtract 101 to decrease day by one.
set /A Day=1%Day%-101

rem The yesterday's date is already valid if the day of month is greater 0.
if %Day% GTR 0 goto BuildYesterday

rem Yesterday is in previous month if day is equal (or less than) 0.
rem Therefore decrease the current month by one with same method as
rem described above to decrease correct also the months 08 and 09.
set "Day=31"
set /A Month=1%Month%-101

rem Yesterday is in previous year if month is equal (or less than) 0.
if %Month% GTR 0 goto GetLastDay
set /A Year-=1
set "Month=12" & goto BuildYesterday

:GetLastDay
rem Determine last day of month depending on month.
for %%I in (4 6 9 11) do if %Month% == %%I set "Day=30" & goto BuildYesterday
if not %Month% == 2 goto BuildYesterday

rem Determine if this year is a leap year with 29 days in February.
set /A LeapYearRule1=Year %% 400
set /A LeapYearRule2=Year %% 100
set /A LeapYearRule3=Year %% 4

rem The current year is always a leap year if it can be divided by 400
rem with 0 left over (1600, 2000, 2400, ...). Otherwise if the current
rem year can be divided by 100 with 0 left over, the current year is NOT
rem a leap year (1900, 2100, 2200, 2300, 2500, ...). Otherwise the current
rem year is a leap year if the year can be divided by 4 with 0 left over.
rem Well, for the year range 1901 to 2099 just leap year rule 3 would be
rem enough and just last IF condition would be enough for this year range.
set "Day=28"
if LeapYearRule1 == 0 goto BuildYesterday
if NOT %LeapYearRule2% == 0 if %LeapYearRule3% == 0 set "Day=29"

rem The leading 0 on month and day in month could be removed and so both
rem values are defined again as string with a leading 0 added and next just
rem last two characters are kept to get day and month always with two digits.

:BuildYesterday
set "Day=0%Day%"
set "Day=%Day:~-2%"
set "Month=0%Month%"
set "Month=%Month:~-2%"

rem Define a variable with yesterday's date in format MM/dd/yyyy.
set "Yesterday=%Year%-%Month%-%Day%"

cd files

ren update_data.csv update_data_%Yesterday%.csv

echo Rename file success!

cd ..

