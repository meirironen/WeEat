# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  address      :string
#  deliverytime :integer          default(30)
#  foodcard     :boolean          default(TRUE)
#  latitude     :decimal(10, 6)
#  longitude    :decimal(10, 6)
#  name         :string
#  rating       :integer          default(1)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  cuisine_id   :integer
#
# Indexes
#
#  index_restaurants_on_cuisine_id  (cuisine_id)
#

class Restaurant < ApplicationRecord
  belongs_to :cuisine
  has_many :reviews, -> { order(updated_at: :desc) }

  validates_presence_of :name
  validates_length_of :name, minimum: 1, maximum: 255,
                             message: 'Restaurant name should be between 1 to 255'

  validates_presence_of :address
  validates_length_of :address, maximum: 255, message: 'address too long(>255)'

  validates :foodcard, inclusion: { in: [true, false] }
  
  validates_numericality_of :deliverytime, only_integer: true,
                                           greater_than_or_equal_to: 0,
                                           less_than_or_equal_to: 180,
                                           allow_nil: true

  validates_numericality_of :rating,  only_integer: true,
                                      greater_than_or_equal_to: 0,
                                      less_than_or_equal_to: 3,
                                      message: 'Rating not in range'

  validates_numericality_of :latitude,
                            greater_than_or_equal_to: -90,
                            less_than_or_equal_to: 90,
                            message: 'latitude not in range'

  validates_numericality_of :longitude,
                            greater_than_or_equal_to: -90,
                            less_than_or_equal_to: 90,
                            message: 'longitude not in range'

  def calc_average_rating
    rating_sum = reviews.reduce(0) { |sum, review| sum + review.rating }
    average_rating = (rating_sum.to_f / reviews.size).round
    save_average_rating(average_rating)
  end

  def save_average_rating(new_rating)
    self.rating = new_rating
    save
  end

end
