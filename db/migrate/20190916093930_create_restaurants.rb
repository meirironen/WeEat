class CreateRestaurants < ActiveRecord::Migration[5.2]
  def up
    create_table :restaurants do |t|
      t.string :name, presence:true
      t.string :address, presence:true
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.boolean :foodcard, default: true
      t.integer :deliverytime, default: 30
      t.integer :rating, default: 1
      t.integer :cuisine_id

      t.timestamps
    end

    add_index :restaurants, :cuisine_id
  end

  def down
    drop_table :restaurants
  end
end
