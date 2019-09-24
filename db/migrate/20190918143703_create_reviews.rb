class CreateReviews < ActiveRecord::Migration[5.2]
  def up
    create_table :reviews do |t|
      t.string 'reviewer', limit: 50
      t.integer 'rating', null: false
      t.text 'comment'
      t.integer 'restaurant_id'

      t.timestamps
    end
    add_index :reviews, :restaurant_id
  end

  def down
    drop_table :reviews
  end
end
