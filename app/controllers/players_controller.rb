class PlayersController < ApplicationController
    
    def index
        @players = Player.all()
    end

    def show
        @player = Player.find(params[:id])
    end
    
    def new
    end

    def create
        @player = Player.new(article_params)
        @player.ruby_count = 0
        @player.save
        redirect_to @player
    end

private
    def article_params
      params.require(:player).permit(:pseudo)
    end
end
