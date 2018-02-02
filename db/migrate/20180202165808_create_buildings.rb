class CreateBuildings < ActiveRecord::Migration[5.1]
  def change
    create_table :buildings do |t|
      t.string :icon
      t.string :title
      t.integer :base_cost
      t.integer :base_generation

      t.timestamps
    end
  end
end
