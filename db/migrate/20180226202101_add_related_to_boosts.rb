class AddRelatedToBoosts < ActiveRecord::Migration[5.1]
  def change
  	add_column :boosts, :related, :integer
  end
end
