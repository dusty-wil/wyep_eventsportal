class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.text :bio
      t.string :name
      t.string :type
      t.string :banner_image
      t.string :youtube_url
      t.string :website_url

      t.timestamps
    end
  end
end
