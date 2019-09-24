require 'rails_helper'

RSpec.describe 'Reviews API', type: :request do

  let!(:cuisine) { FactoryBot.create(:cuisine) }

  let!(:restaurant) { FactoryBot.create(:restaurant, cuisine_id: cuisine.id) }

  let!(:review) { FactoryBot.create(:review, restaurant_id: restaurant.id) }
  let(:review_id) { review.id}

  describe 'GET /api/v1/reviews' do
    # make HTTP get request before each example
    before { get '/api/v1/reviews' }

    it 'returns reviews' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end
  end

  # Test suite for GET /restaurants/:id
  describe 'GET /reviews/:id' do
    before { get "/api/v1/reviews/#{review_id}" }

    context 'when the record exists' do
      it 'returns the review' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(review_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when the record does not exist' do
      let(:review_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns a not found message' do
        expect(response.body).to match("{\"message\":\"Couldn't find Review with 'id'=100\"}")
      end
    end
  end

  # Test suite for POST /reviews
  describe 'POST /reviews' do
    # valid payload
    let(:valid_attributes){
      {
          reviewer: 'Ronen Test',
          comment: 'bla bla bla',
          rating: 2,
          restaurant_id: restaurant.id
      }
    }

    context 'when the request is valid' do
      before { post "/api/v1/reviews", params: valid_attributes }

      it 'creates a review' do
        expect(json['reviewer']).to eq(valid_attributes[:reviewer])
        expect(json['comment']).to eq(valid_attributes[:comment])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(:created)
      end

    end

    context 'when the request is invalid' do
      before { post '/api/v1/reviews', params: { title: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to include("Reviewer can't be blank")
      end
    end
  end

  # Test suite for PUT /reviews/:id
  describe 'PUT /api/v1/reviews/:id' do
    let(:valid_attributes) { { rating: 3 } }

    context 'when the record exists' do
      before { put "/api/v1/reviews/#{review_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json['rating']).to eq(3)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end
    end
  end

  # Test suite for DELETE /reviews/:id
  describe 'DELETE /reviews/:id' do
    before { delete "/api/v1/reviews/#{review_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(:ok)
    end
  end

end
