class ChangeSizeForCostsInBoost < ActiveRecord::Migration[5.1]
  def change
  	change_table :boosts do |t| 
  		t.change :base_cost, :bigint
  	end
  end
end
