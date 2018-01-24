class BonusController < ApplicationController
    before_action :set_bonus, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @bonus = Bonus.all
        json_response(@bonus)
    end

    def create
        @bonus = Bonus.create!(bonus_params)
        json_response(@bonus, :created)
    end

    def show
        json_response(@bonus)
    end

    def update
        @bonus.update(bonus_params)
        head :no_content
    end

    def destroy
        @bonus.destroy
        head :no_content
    end

    private

    def bonus_params
        params.permit(:trigger, :text)
    end

    def set_bonus
        @bonus = Bonus.find(params[:id])
    end
end
