FactoryBot.define do
  factory :review do
    reviewer { Faker::Artist.name }
    rating { Faker::Number.between(from: 1, to:3).to_i }
    comment { Faker::Lorem.sentence(word_count: 10) }
    restaurant_id { Faker::Number.between(from: 0, to: 10) }
  end
end