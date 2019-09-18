# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  name       :string(50)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord
  has_many :restaurants

  validates_presence_of :name
  validates_length_of :name, maximum: 50, message: "Max Cuisine length is 50 chars"
end
