class Boost < ApplicationRecord
    has_many :boost_players
    has_many :players, through: :boost_players
end
