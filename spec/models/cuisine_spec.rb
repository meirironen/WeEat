require 'rails_helper'

RSpec.describe Cuisine, type: :model do

  # Validation tests
  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { should validate_length_of(:name).is_at_most(50).with_message('Max Cuisine length is 50 chars') }
  end

  describe 'cuisine name inputs' do
    it 'is valid with valid cuisine name' do
      expect(Cuisine.new(name: 'Arabic')).to be_valid
    end

    it 'is not valid without a cuisine name' do
      empty_cuisine = Cuisine.new;
      expect(empty_cuisine).not_to be_valid
      expect(empty_cuisine.errors.messages[:name]).to eq(["can't be blank"])
    end

    it 'is not valid when cuisine name is greater than 50' do
      too_long_cuisine = Cuisine.new(name: Faker::Alphanumeric.alpha(number: 55))
      expect(too_long_cuisine).to_not be_valid
      expect(too_long_cuisine.errors.messages[:name][0]).to eq('Max Cuisine length is 50 chars')
    end
  end
end
