class AddFieldsToInterpreters < ActiveRecord::Migration[5.0]
  def change
    add_column :interpreters, :ilidb_id, :integer
  end
end
