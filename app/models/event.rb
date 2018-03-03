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
  
  def self.search(term)
    result = []
    words = term.downcase.gsub(',',' ').split(/\s+/)
    
    Event.all.each do |e|
      target = (e.title || "").strip.downcase + " " + (e.description || "").strip.downcase
      
      words.each do |w|
        if target.include?(w)
          result.push(e)
          break
        end
      end
    end
    
    result
  end
end
