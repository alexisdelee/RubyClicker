class CreateBonus < ActiveRecord::Migration[5.1]
  def change
    create_table :bonus do |t|
      t.string :icon
      t.string :name
      t.string :subtitle
      t.text :description
      t.bigint :cost

      t.timestamps
    end
  end
end
