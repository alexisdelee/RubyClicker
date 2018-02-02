class BuildingPlayer < ApplicationRecord
    belongs_to :player
    belongs_to :building
end
