class PlayersController < ApplicationController
    before_action :set_player, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @players = Player.all()
    end

    def details
        @player = Player.find(params[:id])
    end
    
    def new
    end

    def create
        @player = Player.new(player_params)
        @player.ruby_count = 0
        @player.save
        redirect_to players_path
    end

    def show
        json_response(@player)
    end

    def update
        @player.update(json_player_params)
        head :no_content
    end

    def destroy
        @player.destroy
        head :no_content
    end

private
    def set_player
        @player = Player.find(params[:id])
    end

    def json_player_params
        params.permit(:pseudo, :ruby_count, :buildings_id, :bonus_id)
    end

    def player_params
        params.require(:player).permit(:pseudo)
    end
end
