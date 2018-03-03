# == Schema Information
#
# Table name: events
#
#  id            :integer          not null, primary key
#  date          :date
#  start_time    :datetime
#  end_time      :datetime
#  title         :string
#  description   :string
#  price_advance :decimal(, )
#  price_door    :decimal(, )
#  all_ages      :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  artist_id     :integer
#  venue_id      :integer
#

class Event < ApplicationRecord
  belongs_to :artist
  belongs_to :venue
end
