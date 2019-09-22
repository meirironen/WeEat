require 'rails_helper'

RSpec.describe "Cuisine API", type: :request do

  #init test data
  let!(:cuisines) { create_list(:cuisine, 10) }
  let(:cuisine_id) { cuisines.first.id }

  # Test suite for GET /cuisines
  describe 'GET /cuisines' do
    before { get '/api/v1/cuisines' }

    it 'returns cuisines types' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /cuisines/:id' do
    before { get "/api/v1/cuisines/#{cuisine_id}" }

    context 'when the record exists' do
      it 'returns the cuisine' do
         expect(json).not_to be_empty
         expect(json['id']).to eq(cuisine_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the records doesnt exist' do
      let (:cuisine_id) { 300 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match("{\"message\":\"Couldn't find Cuisine with 'id'=300\"}")
      end
    end

  end

end
