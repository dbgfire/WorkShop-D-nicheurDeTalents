class AddlibelleUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :metier,  :string
  end
end
