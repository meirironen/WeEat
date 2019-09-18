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
end


