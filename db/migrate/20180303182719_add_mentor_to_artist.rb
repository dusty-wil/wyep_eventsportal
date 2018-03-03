class AddMentorToArtist < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :is_mentor, :boolean
  end
end
