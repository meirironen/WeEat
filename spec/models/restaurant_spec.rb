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

require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  #association test
  describe 'assoiciation' do
    it { should belong_to(:cuisine) }
  end


  # Validation tests
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_inclusion_of(:foodcard).in_array([true, false]) }

    it { should validate_length_of(:name).is_at_most(255).with_message('Restaurant name should be between 1 to 255') }
    it { should validate_length_of(:address).is_at_most(255).with_message('address too long(>255)') }

    it 'should validate max delivery time ' do
      should validate_numericality_of(:deliverytime)
                 .is_less_than_or_equal_to(180)
                 .is_greater_than_or_equal_to(0)
    end


    it 'should validate location' do
      should validate_numericality_of(:latitude)
        .is_less_than_or_equal_to(90)
        .is_greater_than_or_equal_to(-90)
        .with_message('latitude not in range')

      should validate_numericality_of(:longitude)
        .is_less_than_or_equal_to(90)
        .is_greater_than_or_equal_to(-90)
        .with_message('longitude not in range')
    end

    it do
      should validate_numericality_of(:rating)
        .is_less_than_or_equal_to(3)
        .is_greater_than_or_equal_to(0)
        .with_message('Rating not in range')
    end
  end
end
