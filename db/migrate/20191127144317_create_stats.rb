class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.string :libelle_metier
      t.text :description
      t.integer :patience
      t.integer :precision
      t.integer :solitaire
      t.integer :volonte
      t.integer :ordonne
      t.integer :logique

      t.timestamps
    end
  end
end
