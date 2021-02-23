class API::V1::DealsController < ApplicationController

    before_action :deal, only: [:show, :destroy]

    def index
        @deals = Deal.all
        render json: @deals
    end

    def create
        @deal = Deal.new(deal_params)
        if @deal.save
            render json: @deal
        else 
            render json: {
                error: "Error creating new deal",
                status: 400
              }, status: 400
        end
    end

    def show
        render json: @deal
    end


    def destroy
        @deal.destroy
    end

    private

    def deal_params
        params.require(:deal).permit(:ticker, :series, :asset_class)
    end

    def set_deal
        @deal = Deal.find_by_id(params[:id])
    end


end
