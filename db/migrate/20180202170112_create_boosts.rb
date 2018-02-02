class CreateBoosts < ActiveRecord::Migration[5.1]
  def change
    create_table :boosts do |t|
      t.string :icon
      t.string :title
      t.string :subtitle
      t.text :description
      t.integer :base_cost

      t.timestamps
    end
  end
end
