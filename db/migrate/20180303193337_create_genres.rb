class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :name

      t.timestamps
    end
    
    add_column :artists, :genre_id, :integer
  end
end
