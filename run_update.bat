@echo off

REM get current day
for /f %%a in ('date /t') do set DAY=%%a 
echo Today is %Day%

if %Day%==Tue goto runscript
if %Day%==Wed goto runscript
if %Day%==Thu goto runscript
if %Day%==Fri goto runscript
if %Day%==Sat goto runscript
goto notrun

:runscript
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

echo START load data %Yesterday%
C:\curl-7.51.0\bin\curl http://101.78.9.114:8983/solr/select/?q^=type_t:"vehiclereg"^&fq^=update_time:\[%Yesterday%T00:00:00Z+TO+%Yesterday%T23:59:59Z\]^&wt^=csv^&indent^=true^&start^=0^&rows^=100000^&fl^=note_id_t,advance_t,axis_t,birth_district_t,birth_province_t,birth_village_t,car_t,cat_t,cc_t,chassis_no_t,color_t,commerce_permit_t,commerce_permit_date_t,commerce_permit_no_t,changelog_t,create_date_t,customer_id_t,cylinder_t,data_code_t,dateofbirth_t,department_t,d2_t,d4_t,d5_t,d6_t,d7_t,d_t,district_t,division_no_t,driverseat_t,editedby_t,email_address_t,encoder_t,energy_t,entry_date_t,entryby_t,engine_no_t,expire_date_t,expire_date_val_t,exam_date_t,exam_place_t,examdate_A_t,examdate_B_t,examdates_t,examtype_t,eye_color_t,fine4_t,fine9_t,fine13_t,fine29_t,fine30_t,fine31_t,finedate_t,finelocation_t,finelog_t,fax_t,height_t,import_permit_date_t,import_permit_hsny_t,import_permit_invest_t,import_permit_no_t,in1_t,industrial_doc_date_t,industrial_doc_no_t,issue_date_t,issue_date_var_t,issue_place_t,keyby_t,name_t,lastname_t,length_t,license_no_t,log_t,make_t,mistakeby_t,model_t,motor_make_t,modify_date,modify_date_t,made_out_t,number_t,nationality_inter_t,nationality_lao_t,occupation_t,paper_t,person_id_t,policenote_t,police_doc_date_t,police_doc_no_t,print_count_t,print_date_1_t,print_no_1_t,print_user_1_t,printedby_t,printlog_t,province_t,province_no_t,province_code_t,province_abbr_t,purpose_t,purpose_no_t,quick_id_t,releasedate_t,resolution_t,row_t,remark_t,remark2_t,rfid_t,save1_t,seats_t,sex_t,social_security_t,special_t,special_date_t,special_remark_t,tax_10_40_t,tax_12_t,tax_50_t,tax_date_t,tax_exem_t,tax_no_t,tax_payment_date_t,tax_payment_no_t,tax_permit_t,tax_receipt_t,tax_t,techincal_id_t,technical_doc_date_t,technical_doc_no_t,telephone_t,type_t,update_time,update_time_t,vehicletype_t,village_t,work_phone_t,weight_empty_t,weight_filled_t,weight_total_t,wheels_t,width_t,year_manufactured_t,home_phone_t,mobile_t,certno_t,certdate_t,certperm_t,certtemp_t,certcode_t,certlicense_t,certolddate_t,access_t,_olddata_t,_ver_t,tuk_t,counted_t,v_t,title_t,box_a1_t,box_a5_t,deleted,deleted_t,date_replace_t,document_id_t,id,id_t,open_date1_t,sengphet_t,serial_a_t,owner_t,object_id_t,parent_id_t,f5_t,g5_t,h5_t,di_t,last_print_by_t,last_print_date_t,printedat_t,score_t,flag_t,ati_color_1_t,ati_note_no1_t,ati_note_no2_t,certify_doc_date_t,certify_doc_number_t,certify_doc_remark_t,collected_t,create_new_t,create_newm_t,create_year_t,createday_t,doc1_cnt_t,doc2_cnt_t,doc3_cnt_t,doc4_cnt_t,doc5_cnt_t,doc6_cnt_t,group_t,owner_name_t,technicalcenter_t,technicalcheck_t,tempodate_t,tempoduration_t,tempono_t,temporemark_t,tnic_date_t,tnic_expire_date_t,tnic_result_t,today_t,transfer_date_t,transfer_name_t,transfer_number_t,transfer_province_t,transfer_remark_t,undeleted_by_t,undeleted_date_t,certprintdate_t > update_data.csv

mysql --user=root --password=password --database=vrms_db --local-infile vrms_db < import.sql
echo Import success!

ren update_data.csv update_data_%Yesterday%.csv
echo Rename file success!

cd..
cd update_javascript

node update.js

timeout 5
exit

:notrun
echo Not run script!
timeout 5
exit