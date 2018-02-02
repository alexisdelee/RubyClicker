class Player < ApplicationRecord
    has_many :building_players
    has_many :buildings, through: :building_players
    has_many :boost_players
    has_many :boosts, through: :boost_players
end
