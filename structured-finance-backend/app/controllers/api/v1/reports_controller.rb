class Api::V1::ReportsController < ApplicationController

    before_action :set_deal
    
    def index
        @reports = @deal.reports
        render json: @reports
    end

    def show
        @report = @deal.reports.find_by_id(params[:id])
        render json: @report
    end

    def create 
        @report = @deal.reports.build(report_params)
        if @report.save
            render json: @deal
        else
            render json: {
                error: "Error creating new report for deal",
                status: 400
              }, status: 400
        end
    end

    def destroy
        @report = Report.find_by_id(params[:id])
        @deal = Deal.find_by_id(params[:deal_id])
        @report.destroy
        render json: @deal
    end

    private 

    def set_deal
        @deal = Deal.find(params[:deal_id])
    end

    def report_params
        params.require(:report).permit(:category, :report_link, :report_date, :rating_agency)
    end

end
