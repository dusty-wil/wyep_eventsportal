class AddRelationships < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :artist_id, :integer
    add_column :events, :venue_id, :integer
  end
end
