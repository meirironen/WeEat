FactoryBot.define do
  factory :restaurant do
    name { Faker::Restaurant.name }
    address { Faker::Address.full_address }
    deliverytime { Faker::Number.between(from: 30, to: 120).to_i }
    foodcard {Faker::Boolean.boolean(true_ratio: 0.5)}
    latitude { Faker::Address.latitude}
    longitude { Faker::Address.latitude}
    rating { Faker::Number.between(from: 0, to: 3) }
    cuisine_id { Faker::Number.between(from: 0, to: 10) }
  end
end