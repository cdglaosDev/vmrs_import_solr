export default (sequelize, Sequelize) => {
  const Vehicles = sequelize.define(
    'vehicles',
    {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: Sequelize.STRING,
        allowNull: true
      },
      division_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      note_id: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      province_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      car_type: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      licence_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      car_number_type: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      owner_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      tenant_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      village_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      vehicle_category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      province_code: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      district_code: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      steering_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      vehicle_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      year_manufacture: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      height: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      long: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      gas_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      wheels: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      engine_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      chassis_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      weight: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      import_permit_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      import_permit_date: {
        type: Sequelize.STRING(50), // Old field is datetime
        allowNull: true,
        defaultValue: null
      },
      industrial_doc_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      industrial_doc_date: {
        type: Sequelize.STRING(50), // Old field is datetime
        allowNull: true,
        defaultValue: null
      },
      technical_doc_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      total_weight: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      technical_doc_date: {
        type: Sequelize.STRING(50), // Old field is datetime
        allowNull: true,
        defaultValue: null
      },
      width: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      model_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      comerce_permit_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      comerce_permit_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      tax_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      tax_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      tax_payment_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      tax_payment_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      police_doc_no: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      police_doc_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true
      },
      datetime_update: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      deleted_at: {
        type: Sequelize.STRING(50), // Old field is timestamp
        allowNull: true,
        defaultValue: null
      },
      created_at: {
        type: Sequelize.STRING(50), // Old field is timestamp
        allowNull: true,
        defaultValue: null
      },
      updated_at: {
        type: Sequelize.STRING(50), // Old field is timestamp
        allowNull: true,
        defaultValue: null
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      moter_brand_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      log_activity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      seat: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      view: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 1
      },
      quick: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 0
      },
      tax_10_40: {
        type: Sequelize.INTEGER, // Old field is tiyint
        allowNull: true,
        defaultValue: 0
      },
      tax_exam: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 0
      },
      tax_12: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 0
      },
      tax_50: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 0
      },
      import_permit_hsny: {
        type: Sequelize.INTEGER, // tiny int
        allowNull: true,
        defaultValue: 0
      },
      import_permit_invest: {
        type: Sequelize.STRING(200),
        allowNull: true,
        defaultValue: null
      },
      tax_receipt: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      request_app_type: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      issue_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      expire_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      tax_permit: {
        type: Sequelize.STRING(200),
        allowNull: true,
        defaultValue: null
      },
      sub_color_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      reg_complete: {
        type: Sequelize.INTEGER, // Old field is tinyint
        allowNull: true,
        defaultValue: 0
      },
      vehicle_kind_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      motor_brand_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      vehicle_purpose_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      locks: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
      },
      lock_no: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      startlock: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      endlock: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      companylock: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      cylinder: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      cc: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      weight_filled: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
      },
      axis: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      engine_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      card_serial_no: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      chip_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      inspect_place: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      inspect_result: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      inspect_issue_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      inspect_expire_date: {
        type: Sequelize.STRING(50), // Old field is date
        allowNull: true,
        defaultValue: null
      },
      vdvd_card: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      commerce_permit: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      _olddata: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      _ver: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      access: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      advance: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      certcode: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      certdate: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certify_doc_date: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certify_doc_number: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certify_doc_remark: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      certlicense: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certno: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certolddate: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certperm: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      certprintdate: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      certtemp: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      color_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      commerce_permit_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      counted: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      deleted: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      district_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      division_no_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      steering_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      gas_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      expire_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      import_permit_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      industrial_doc_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      issue_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      issue_date_var: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      issue_place: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      keyby: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      owner_lastname: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      log: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      brand_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      model_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      motor_brand_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      police_doc_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      province_abbr: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
      },
      province_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      purpose_old: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      quick_id: {
        type: Sequelize.STRING(20),
        allowNull: true,
        defaultValue: null
      },
      special_date: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      special_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      special_remark: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      special: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      },
      tax_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      tax_payment_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      tax: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      technical_doc_date_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      technicalcheck: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      tnic_date: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      tnic_expire_date: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      tnic_result: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      update_time_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      vehicle_type_old: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      vehicle_send: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
      },
      vehicle_text2: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      vehicle_unit: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
      }
    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  return Vehicles
}
