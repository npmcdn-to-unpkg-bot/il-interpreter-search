class CreateInterpreters < ActiveRecord::Migration[5.0]
  def change
    create_table :interpreters do |t|

      t.timestamps
    end
  end
end
