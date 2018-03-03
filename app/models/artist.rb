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
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  is_mentor    :boolean
#  genre_id     :integer
#  image_url    :string
#

class Artist < ApplicationRecord
  validates_inclusion_of :is_mentor, :in => [true, false]
  
  has_many :events
  has_many :venues, :through => :events
  has_one :genre

  def self.search(term)
    result = []
    words = term.downcase.gsub(',',' ').split(/\s+/)
    
    Artist.all.each do |a|
      target = (a.name || "").strip.downcase + " " + (a.bio || "").strip.downcase + (a.type || "").strip.downcase
      
      words.each do |w|
        if target.include?(w)
          result.push(a)
          break
        end
      end
    end
    
    result
  end
end
