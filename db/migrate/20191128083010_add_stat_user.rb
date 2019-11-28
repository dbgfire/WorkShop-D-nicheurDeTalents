class AddStatUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :patience, :integer
    add_column :users, :precision,:integer
    add_column :users, :solitaire,:integer
    add_column :users, :volonte,  :integer
    add_column :users, :ordonne,  :integer
    add_column :users, :logique,  :integer
  end
end
