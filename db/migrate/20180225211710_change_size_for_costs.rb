class ChangeSizeForCosts < ActiveRecord::Migration[5.1]
  def change
  	change_table :buildings do |t| 
  		t.change :base_cost, :bigint
  	end

  	change_table :tickers do |t| 
  		t.change :cost, :bigint
  	end

  	change_table :players do |t| 
  		t.change :ruby_count, :bigint
  	end
  end
end
