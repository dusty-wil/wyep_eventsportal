class AddToVenue < ActiveRecord::Migration[5.1]
  def change
    add_column :venues, :city, :string
    add_column :venues, :state, :string
    add_column :venues, :category, :string
    add_column :venues, :url, :string
    add_column :venues, :source, :string
    add_column :venues, :src_id, :string
  end
end
