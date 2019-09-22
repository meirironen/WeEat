require "rails_helper"

RSpec.describe 'Restaurants Routes', type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/api/v1/restaurants").to route_to(controller: 'api/v1/restaurants', action:'index')
    end

    it "routes to #show" do
      expect(:get => "/api/v1/restaurants/1").to route_to("api/v1/restaurants#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/api/v1/restaurants").to route_to("api/v1/restaurants#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/v1/restaurants/1").to route_to("api/v1/restaurants#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/v1/restaurants/1").to route_to("api/v1/restaurants#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/v1/restaurants/1").to route_to("api/v1/restaurants#destroy", :id => "1")
    end
  end
end
