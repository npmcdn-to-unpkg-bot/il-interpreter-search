class CreateInterpreters < ActiveRecord::Migration[5.0]
  def change
    create_table :interpreters do |t|
      t.integer :aoicid
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.integer :zip
      t.string :reg_email
      t.string :alternate_email
      t.string :phone
      t.string :alternate_phone


      # 'availability'
      t.string :circuit_availability
      t.boolean :remote_interpret_phone
      t.boolean :remote_interpret_video


      t.string :language_code
      t.string :language
      t.string :certification
      t.datetime :expiry_date
      t.datetime :certification_date
      t.text :comments

      t.timestamps
    end
  end
end
