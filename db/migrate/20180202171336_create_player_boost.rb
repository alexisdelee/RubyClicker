class CreatePlayerBoost < ActiveRecord::Migration[5.1]
  def change
    create_table :boost_players do |t|
      t.belongs_to :player, index: true
      t.belongs_to :boost, index: true
    end
  end
end
