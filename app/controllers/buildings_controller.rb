class BuildingsController < ApplicationController
    before_action :set_building, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @buildings = Building.all
        json_response(@buildings)
    end

    def create
        @building = Building.create!(building_params)
        json_response(@building, :created)
    end

    def show
        json_response(@building)
    end

    def update
        # @building.update(building_params)
        # head :no_content

        @building = Building.find(params[:id])
        @building.players << Player.find(params[:player_id])

        respond_to do |format|
            format.json { render :json => Player.find(params[:player_id]).to_json( :include => [:buildings, :boosts] ) }
        end
    end

    def destroy
        @building.destroy
        head :no_content
    end

    private

    def building_params
        params.permit(:icon, :name, :base_cost, :base_cookies_per_seconds)
    end

    def set_building
        @building = Building.find(params[:id])
    end
end
