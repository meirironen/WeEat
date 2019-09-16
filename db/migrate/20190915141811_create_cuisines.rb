class CreateCuisines < ActiveRecord::Migration[5.2]
  def up
    create_table :cuisines do |t|
      t.string :name, limit: 50, presence: true

      t.timestamps
    end
  end

  def down
    drop_table :cuisines
  end
end
