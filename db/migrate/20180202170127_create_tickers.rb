class CreateTickers < ActiveRecord::Migration[5.1]
  def change
    create_table :tickers do |t|
      t.integer :cost
      t.text :text

      t.timestamps
    end
  end
end
