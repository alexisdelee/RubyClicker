class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :pseudo
      t.integer :ruby_count
      t.integer :clicks

      t.timestamps
    end
  end
end
