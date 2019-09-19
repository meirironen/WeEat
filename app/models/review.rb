# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  comment       :text
#  rating        :integer          not null
#  reviewer      :string(50)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer
#
# Indexes
#
#  index_reviews_on_restaurant_id  (restaurant_id)
#

class Review < ApplicationRecord
  belongs_to :restaurant

  validates_presence_of(:reviewer)
  validates_length_of :reviewer, maximum: 50, message: 'Reviewer max name length is 50 chars'

  validates_numericality_of :rating,
                            only_integer: true,
                            greater_than: 0,
                            less_than_or_equal_to: 3,
                            message: 'Rating not in range'


  validates_presence_of(:comment)
  validates_length_of :comment, maximum: 255, message: 'Comment max length is 255 chars'

  validates_associated(:restaurant)

  after_save do
    restaurant.calc_average_rating
  end
end


