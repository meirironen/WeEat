require 'rails_helper'

RSpec.describe Review, type: :model do
  #associations
  describe 'associations' do
    it { is_expected.to belong_to(:restaurant) }
  end

  # Validation tests
  describe 'validations' do
    it { is_expected.to validate_presence_of(:reviewer) }
    it { should validate_length_of(:reviewer).is_at_most(50).with_message('Reviewer max name length is 50 chars') }

    it { is_expected.to validate_presence_of(:comment) }
    it { should validate_length_of(:comment).is_at_most(255).with_message('Comment max length is 255 chars') }

    it do
      should validate_numericality_of(:rating)
                 .is_less_than_or_equal_to(3)
                 .is_greater_than(0)
                 .with_message('Rating not in range')
    end
  end
end