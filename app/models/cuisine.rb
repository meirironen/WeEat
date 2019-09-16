class Cuisine < ApplicationRecord
  validates_presence_of :name
  validates_length_of :name, maximum: 50, message: "Max Cuisine length is 50 chars"
end
