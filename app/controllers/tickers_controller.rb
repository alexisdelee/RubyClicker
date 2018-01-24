class TickersController < ApplicationController
    before_action :set_ticker, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @tickers = Ticker.all
        json_response(@tickers)
    end

    def create
        @ticker = Ticker.create!(ticker_params)
        json_response(@ticker, :created)
    end

    def show
        json_response(@ticker)
    end

    def update
        @ticker.update(ticker_params)
        head :no_content
    end

    def destroy
        @ticker.destroy
        head :no_content
    end

    private

    def ticker_params
        params.permit(:trigger, :text)
    end

    def set_ticker
        @ticker = ticker.find(params[:id])
    end
end
