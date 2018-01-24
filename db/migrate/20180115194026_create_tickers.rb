class CreateTickers < ActiveRecord::Migration[5.1]
  def change
    create_table :tickers do |t|
      t.bigint :trigger
      t.string :text

      t.timestamps
    end
  end
end
