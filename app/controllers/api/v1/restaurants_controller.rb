module Api::V1
  class RestaurantsController < ApplicationController
    before_action :set_restaurant, only: [:show, :update, :destroy]

    # GET /restaurants
    def index
      @restaurants = Restaurant.all

      json_response(@restaurants)
    end

    # GET /restaurants/1
    def show
      json_response(@restaurant)
    end

    # POST /restaurants
    def create
      @restaurant = Restaurant.create!(restaurant_params)
      json_response(@restaurant,:created)
    end

    # PATCH/PUT /restaurants/1
    def update
      @restaurant.update(restaurant_params)
      head :no_content
    end

    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restaurant_params
      params.permit(:foodcard, :name, :address, :latitude, :longitude, :deliverytime, :rating, :cuisine_id)
    end
  end
end

