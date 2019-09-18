require 'rails_helper'

RSpec.describe 'restaurants API', type: :request do
  # initialize test data
  #

  let!(:cuisine) { FactoryBot.create(:cuisine) }

  let!(:restaurant) { FactoryBot.create(:restaurant, cuisine_id: cuisine.id) }
  let(:restaurant_id) { restaurant.id }

  # Test suite for GET /restaurants
  describe 'GET /api/v1/restaurants' do
    # make HTTP get request before each example
    before { get '/api/v1/restaurants' }

    it 'returns restaurants' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /restaurants/:id
  describe 'GET /restaurants/:id' do
    before { get "/api/v1/restaurants/#{restaurant_id}" }

    context 'when the record exists' do
      it 'returns the article' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(restaurant_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:restaurant_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match("{\"message\":\"Couldn't find Restaurant with 'id'=100\"}")
      end
    end
  end

  # Test suite for POST /restaurants
  describe 'POST /restaurants' do
    # valid payload
    let(:valid_attributes){
      {
        foodcard: false,
        name: 'Ronen Test',
        address: 'Tel Aviv',
        latitude: 52.35,
        longitude: 35.52,
        deliverytime: 60,
        rating: 2,
        cuisine_id: cuisine.id
      }
    }

    context 'when the request is valid' do
      before { post "/api/v1/restaurants", params: valid_attributes }

      it 'creates a restaurant' do
        expect(json['name']).to eq(valid_attributes[:name])
        expect(json['address']).to eq(valid_attributes[:address])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

    end

    context 'when the request is invalid' do
      before { post '/api/v1/restaurants', params: { title: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to include("Name can't be blank")
      end
    end
  end

  # Test suite for PUT /restaurants/:id
  describe 'PUT /api/v1/restaurants/:id' do
    let(:valid_attributes) { { name: 'Updated Restaurant Name' } }

    context 'when the record exists' do
      before { put "/api/v1/restaurants/#{restaurant_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /restaurants/:id
  describe 'DELETE /restaurants/:id' do
    before { delete "/api/v1/restaurants/#{restaurant_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
