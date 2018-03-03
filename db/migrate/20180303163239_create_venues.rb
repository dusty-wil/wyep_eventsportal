class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name
      t.text :bio
      t.string :tags
      t.string :neighborhood
      t.string :address_1
      t.string :address_2
      t.string :zipcode
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
