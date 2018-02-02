class ChangeBuildingBoostFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :buildings, :base_generation, :float
  end
end
