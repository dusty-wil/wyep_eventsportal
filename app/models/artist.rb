# == Schema Information
#
# Table name: artists
#
#  id           :integer          not null, primary key
#  bio          :text
#  name         :string
#  type         :string
#  banner_image :string
#  youtube_url  :string
#  website_url  :string
#  is_mentor    :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Artist < ApplicationRecord
end
