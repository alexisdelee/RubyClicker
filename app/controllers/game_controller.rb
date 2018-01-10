class GameController < ApplicationController
  def index
    @player = Player.find(params[:id])
  end
end
