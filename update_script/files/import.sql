truncate table vehicles_solr_pre_upload;

load data local infile 'update_data.csv' into table vehicles_solr_pre_upload character set utf8 fields terminated by ',' optionally enclosed by '"' lines terminated by '\n' ignore 1 lines;