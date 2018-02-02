class Building < ApplicationRecord
    has_many :building_players
    has_many :players, through: :building_players
end
