class CreatePlayerBuilding < ActiveRecord::Migration[5.1]
  def change
    create_table :building_players do |t|
      t.belongs_to :player, index: true
      t.belongs_to :building, index: true
    end
  end
end
