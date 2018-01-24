class Player < ApplicationRecord
    has_many :buildings
    has_many :bonus
end
