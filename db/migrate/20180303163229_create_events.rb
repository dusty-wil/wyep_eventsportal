class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.date :date
      t.datetime :start_time
      t.datetime :end_time
      t.string :title
      t.string :description
      t.decimal :price_advance
      t.decimal :price_door
      t.boolean :all_ages

      t.timestamps
    end
  end
end
