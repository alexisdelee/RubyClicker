class AddBuildingsToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :buildings, foreign_key: true
  end
end
