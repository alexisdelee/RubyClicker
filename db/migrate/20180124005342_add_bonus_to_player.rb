class AddBonusToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :bonus, foreign_key: true
  end
end
