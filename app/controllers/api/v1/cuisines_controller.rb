module Api::V1
  class CuisinesController < ApplicationController

    # GET /cuisines
    def index
      @cuisines = Cuisine.all

      json_response(@cuisines)
    end

    # GET /cuisines/1
    def show
      @cuisine = set_cuisines
      json_response(@cuisine)
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_cuisines
      @cuisine = Cuisine.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cuisine_params
      params.require(:cuisine).permit(:name)
    end
  end
end