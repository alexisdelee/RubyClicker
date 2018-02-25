class BoostsController < ApplicationController
    before_action :set_bonus, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @boosts = Boost.all
        json_response(@boosts)
    end

    def create
        @boosts = Boost.create!(boosts_params)
        json_response(@boosts, :created)
    end

    def show
        json_response(@boosts)
    end

    def update
        @boosts.update(boosts_params)
        head :no_content
    end

    def destroy
        @boosts.destroy
        head :no_content
    end

    private

    def boosts_params
        params.permit(:trigger, :text)
    end

    def set_bonus
        @boosts = Boost.find(params[:id])
    end
end
