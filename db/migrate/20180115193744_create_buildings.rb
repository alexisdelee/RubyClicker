class CreateBuildings < ActiveRecord::Migration[5.1]
  def change
    create_table :buildings do |t|
      t.string :icon
      t.string :name
      t.bigint :base_cost
      t.bigint :base_cookies_per_seconds

      t.timestamps
    end
  end
end
