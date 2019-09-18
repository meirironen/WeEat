FactoryBot.define do
  factory :cuisine do
    name { Faker::Restaurant.name }
  end
end