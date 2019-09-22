module Api::V1
  class ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]

    # GET /api/v1/reviews
    def index
      @reviews = Review.all

      json_response(@reviews)
    end

    # GET /reviews/1
    def show
      json_response(@review)
    end

    # POST /reviews
    def create

      @review = Review.create!(review_params)
      json_response(@review,:created)
    end

    # PATCH/PUT /reviews/1
    def update
      @review.update(review_params)
      json_response(@review)
    end

    # DELETE /reviews/1
    def destroy
      @review.destroy
      json_response(@review)
    end

    private
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.permit(:reviewer, :comment, :rating, :restaurant_id)
    end
  end
end