export default (sequelize, Sequelize) => {
  const VehicleVdvcPreUpload = sequelize.define(
    'vehicles_pre_upload',
    {
      note_id_t: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      advance_t: {
        type: Sequelize.STRING
      },
      axis_t: {
        type: Sequelize.STRING
      },
      birth_district_t: {
        type: Sequelize.STRING
      },
      birth_province_t: {
        type: Sequelize.STRING
      },
      birth_village_t: {
        type: Sequelize.STRING
      },
      car_t: {
        type: Sequelize.STRING
      },
      cat_t: {
        type: Sequelize.STRING
      },
      cc_t: {
        type: Sequelize.STRING
      },
      chassis_no_t: {
        type: Sequelize.STRING
      },
      color_t: {
        type: Sequelize.STRING
      },
      commerce_permit_t: {
        type: Sequelize.STRING
      },
      commerce_permit_date_t: {
        type: Sequelize.STRING
      },
      commerce_permit_no_t: {
        type: Sequelize.STRING
      },
      changelog_t:{
        type: Sequelize.STRING
      },
      create_date_t: {
        type: Sequelize.STRING
      },
      customer_id_t: {
        type: Sequelize.STRING
      },
      cylinder_t: {
        type: Sequelize.STRING
      },
      data_code_t: {
        type: Sequelize.STRING
      },
      dateofbirth_t: {
        type: Sequelize.STRING
      },
      department_t: {
        type: Sequelize.STRING
      },
      d2_t: {
        type: Sequelize.STRING
      },
      d4_t: {
        type: Sequelize.STRING
      },
      d5_t: {
        type: Sequelize.STRING
      },
      d6_t: {
        type: Sequelize.STRING
      },
      d7_t: {
        type: Sequelize.STRING
      },
      d_t: {
        type: Sequelize.STRING
      },
      district_t: {
        type: Sequelize.STRING
      },
      division_no_t: {
        type: Sequelize.STRING
      },
      driverseat_t: {
        type: Sequelize.STRING
      },
      editedby_t: {
        type: Sequelize.STRING
      },
      email_address_t: {
        type: Sequelize.STRING
      },
      encoder_t: {
        type: Sequelize.STRING
      },
      energy_t: {
        type: Sequelize.STRING
      },
      entry_date_t: {
        type: Sequelize.STRING
      },
      entryby_t: {
        type: Sequelize.STRING
      },
      engine_no_t: {
        type: Sequelize.STRING
      },
      expire_date_t: {
        type: Sequelize.STRING
      },
      expire_date_val_t: {
        type: Sequelize.STRING
      },
      exam_date_t: {
        type: Sequelize.STRING
      },
      exam_place_t: {
        type: Sequelize.STRING
      },
      examdate_A_t: {
        type: Sequelize.STRING
      },
      examdate_B_t: {
        type: Sequelize.STRING
      },
      examtype_t: {
        type: Sequelize.STRING
      },
      eye_color_t: {
        type: Sequelize.STRING
      },
      fine4_t: {
        type: Sequelize.STRING
      },
      fine9_t: {
        type: Sequelize.STRING
      },
      fine13_t: {
        type: Sequelize.STRING
      },
      fine29_t: {
        type: Sequelize.STRING
      },
      fine30_t: {
        type: Sequelize.STRING
      },
      fine31_t: {
        type: Sequelize.STRING
      },
      finedate_t: {
        type: Sequelize.STRING
      },
      finelocation_t: {
        type: Sequelize.STRING
      },
      finelog_t: {
        type: Sequelize.STRING
      },
      fax_t: {
        type: Sequelize.STRING
      },
      height_t: {
        type: Sequelize.STRING
      },
      import_permit_date_t	: {
        type: Sequelize.STRING
      },
      import_permit_hsny_t: {
        type: Sequelize.STRING
      },
      import_permit_invest_t: {
        type: Sequelize.STRING
      },
      import_permit_no_t: {
        type: Sequelize.STRING
      },
      in1_t: {
        type: Sequelize.STRING
      },
      industrial_doc_date_t: {
        type: Sequelize.STRING
      },
      industrial_doc_no_t: {
        type: Sequelize.STRING
      },
      issue_date_t:{
        type: Sequelize.STRING
      },
      issue_date_var_t: {
        type: Sequelize.STRING
      },
      issue_place_t: {
        type: Sequelize.STRING
      },
      keyby_t: {
        type: Sequelize.STRING
      },
      name_t: {
        type: Sequelize.STRING
      },
      lastname_t: {
        type: Sequelize.STRING
      },
      length_t: {
        type: Sequelize.STRING
      },
      license_no_t: {
        type: Sequelize.STRING
      },
      log_t: {
        type: Sequelize.STRING
      },
      make_t: {
        type: Sequelize.STRING
      },
      mistakeby_t: {
        type: Sequelize.STRING
      },
      model_t: {
        type: Sequelize.STRING
      },
      motor_make_t: {
        type: Sequelize.STRING
      },
      modify_date: {
        type: Sequelize.STRING
      },
      modify_date_t: {
        type: Sequelize.STRING
      },
      made_out_t: {
        type: Sequelize.STRING
      },
      number_t: {
        type: Sequelize.STRING
      },
      nationality_inter_t: {
        type: Sequelize.STRING
      },
      nationality_lao_t: {
        type: Sequelize.STRING
      },
      occupation_t: {
        type: Sequelize.STRING
      },
      paper_t: {
        type: Sequelize.STRING
      },
      person_id_t: {
        type: Sequelize.STRING
      },
      policenote_t: {
        type: Sequelize.STRING
      },
      police_doc_date_t: {
        type: Sequelize.STRING
      },
      police_doc_no_t: {
        type: Sequelize.STRING
      },
      print_count_t: {
        type: Sequelize.STRING
      },
      print_date_1_t: {
        type: Sequelize.STRING
      },
      print_no_1_t: {
        type: Sequelize.STRING
      },
      print_user_1_t: {
        type: Sequelize.STRING
      },
      printedby_t: {
        type: Sequelize.STRING
      },
      printlog: {
        type: Sequelize.STRING
      },
      province_t: {
        type: Sequelize.STRING
      },
      province_no_t: {
        type: Sequelize.STRING
      },
      province_code_t: {
        type: Sequelize.STRING
      },
      province_abbr_t: {
        type: Sequelize.STRING
      },
      purpose_t: {
        type: Sequelize.STRING
      },
      purpose_no_t: {
        type: Sequelize.STRING
      },
      quick_id_t: {
        type: Sequelize.STRING
      },
      releasedate_t: {
        type: Sequelize.STRING
      },
      resolution_t: {
        type: Sequelize.STRING
      },
      row_t: {
        type: Sequelize.STRING
      },
      remark_t: {
        type: Sequelize.STRING
      },
      remark2_t: {
        type: Sequelize.STRING
      },
      rfid_t: {
        type: Sequelize.STRING
      },
      save1_t: {
        type: Sequelize.STRING
      },
      seats_t: {
        type: Sequelize.STRING
      },
      sex_t: {
        type: Sequelize.STRING
      },
      social_security_t: {
        type: Sequelize.STRING
      },
      special_t: {
        type: Sequelize.STRING
      },
      special_date_t: {
        type: Sequelize.STRING
      },
      special_remark_t: {
        type: Sequelize.STRING
      },
      tax_10_40_t: {
        type: Sequelize.STRING
      },
      tax_12_t: {
        type: Sequelize.STRING
      },
      tax_50_t: {
        type: Sequelize.STRING
      },
      tax_date_t: {
        type: Sequelize.STRING
      },
      tax_exem_t: {
        type: Sequelize.STRING
      },
      tax_no_t: {
        type: Sequelize.STRING
      },
      tax_payment_date_t: {
        type: Sequelize.STRING
      },
      tax_payment_no_t: {
        type: Sequelize.STRING
      },
      tax_permit_t: {
        type: Sequelize.STRING
      },
      tax_receipt_t: {
        type: Sequelize.STRING
      },
      tax_t: {
        type: Sequelize.STRING
      },
      techincal_id_t: {
        type: Sequelize.STRING
      },
      technical_doc_date_t: {
        type: Sequelize.STRING
      },
      technical_doc_no_t: {
        type: Sequelize.STRING
      },
      telephone_t: {
        type: Sequelize.STRING
      },
      type_t: {
        type: Sequelize.STRING
      },
      update_time: {
        type: Sequelize.STRING
      },
      update_time_t: {
        type: Sequelize.STRING
      },
      vehicletype_t: {
        type: Sequelize.STRING
      },
      village_t: {
        type: Sequelize.STRING
      },
      work_phone_t: {
        type: Sequelize.STRING
      },
      weight_empty_t: {
        type: Sequelize.STRING
      },
      weight_filled_t: {
        type: Sequelize.STRING
      },
      weight_total_t: {
        type: Sequelize.STRING
      },
      wheels_t: {
        type: Sequelize.STRING
      },
      width_t: {
        type: Sequelize.STRING
      },
      year_manufactured_t: {
        type: Sequelize.STRING
      },
      home_phone_t: {
        type: Sequelize.STRING
      },
      mobile_t: {
        type: Sequelize.STRING
      },
      certno_t: {
        type: Sequelize.STRING
      },
      certdate_t: {
        type: Sequelize.STRING
      },
      certperm_t: {
        type: Sequelize.STRING
      },
      certtemp_t: {
        type: Sequelize.STRING
      },
      certcode_t: {
        type: Sequelize.STRING
      },
      certlicense_t: {
        type: Sequelize.STRING
      },
      certolddate_t: {
        type: Sequelize.STRING
      },
      access_t: {
        type: Sequelize.STRING
      },
      _olddata_t: {
        type: Sequelize.STRING
      },
      _ver_t: {
        type: Sequelize.STRING
      },
      tuk_t: {
        type: Sequelize.STRING
      },
      counted_t: {
        type: Sequelize.STRING
      },
      v_t: {
        type: Sequelize.STRING
      },
      title_t: {
        type: Sequelize.STRING
      },
      box_a1_t: {
        type: Sequelize.STRING
      },
      box_a5_t: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.STRING
      },
      deleted_t: {
        type: Sequelize.STRING
      },
      date_replace_t: {
        type: Sequelize.STRING
      },
      document_id_t: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      id_t: {
        type: Sequelize.STRING
      },
      open_date1_t: {
        type: Sequelize.STRING
      },
      sengphet_t: {
        type: Sequelize.STRING
      },
      serial_a_t: {
        type: Sequelize.STRING
      },
      owner_t: {
        type: Sequelize.STRING
      },
      object_id_t: {
        type: Sequelize.STRING
      },
      parent_id_t: {
        type: Sequelize.STRING
      },
      f5_t: {
        type: Sequelize.STRING
      },
      g5_t: {
        type: Sequelize.STRING
      },
      h5_t: {
        type: Sequelize.STRING
      },
      di_t: {
        type: Sequelize.STRING
      },
      last_print_by_t: {
        type: Sequelize.STRING
      },
      last_print_date_t: {
        type: Sequelize.STRING
      },
      printedat_t: {
        type: Sequelize.STRING
      },
      score_t: {
        type: Sequelize.STRING
      },
      flag_t: {
        type: Sequelize.STRING
      },
      ati_color_1_t: {
        type: Sequelize.STRING
      },
      ati_note_no1_t: {
        type: Sequelize.STRING
      },
      ati_note_no2_t: {
        type: Sequelize.STRING
      },
      certify_doc_date_t: {
        type: Sequelize.STRING
      },
      certify_doc_number_t: {
        type: Sequelize.STRING
      },
      certify_doc_remark_t: {
        type: Sequelize.STRING
      },
      collected_t: {
        type: Sequelize.STRING
      },
      create_new_t: {
        type: Sequelize.STRING
      },
      create_newm_t: {
        type: Sequelize.STRING
      },
      create_year_t: {
        type: Sequelize.STRING
      },
      createday_t: {
        type: Sequelize.STRING
      },
      doc1_cnt_t: {
        type: Sequelize.STRING
      },
      doc2_cnt_t: {
        type: Sequelize.STRING
      },
      doc3_cnt_t: {
        type: Sequelize.STRING
      },
      doc4_cnt_t: {
        type: Sequelize.STRING
      },
      doc5_cnt_t: {
        type: Sequelize.STRING
      },
      doc6_cnt_t: {
        type: Sequelize.STRING
      },
      group_t: {
        type: Sequelize.STRING
      },
      owner_name_t: {
        type: Sequelize.STRING
      },
      technicalcenter_t: {
        type: Sequelize.STRING
      },
      technicalcheck_t: {
        type: Sequelize.STRING
      },
      tempodate_t: {
        type: Sequelize.STRING
      },
      tempoduration_t: {
        type: Sequelize.STRING
      },
      tempono_t: {
        type: Sequelize.STRING
      },
      temporemark_t: {
        type: Sequelize.STRING
      },
      tnic_date_t: {
        type: Sequelize.STRING
      },
      tnic_expire_date_t: {
        type: Sequelize.STRING
      },
      tnic_result_t: {
        type: Sequelize.STRING
      },
      today_t: {
        type: Sequelize.STRING
      },
      transfer_date_t: {
        type: Sequelize.STRING
      },
      transfer_name_t: {
        type: Sequelize.STRING
      },
      transfer_number_t: {
        type: Sequelize.STRING
      },
      transfer_province_t: {
        type: Sequelize.STRING
      },
      transfer_remark_t	: {
        type: Sequelize.STRING
      },
      undeleted_by_t: {
        type: Sequelize.STRING
      },
      undeleted_date_t: {
        type: Sequelize.STRING
      },
      certprintdate_t: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return VehicleVdvcPreUpload
}