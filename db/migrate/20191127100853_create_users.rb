class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :mail
      t.string :phone

      t.timestamps
    end
  end
end
