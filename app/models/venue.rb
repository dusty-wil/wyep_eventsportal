# == Schema Information
#
# Table name: venues
#
#  id           :integer          not null, primary key
#  name         :string
#  bio          :text
#  tags         :string
#  neighborhood :string
#  address_1    :string
#  address_2    :string
#  zipcode      :string
#  latitude     :decimal(, )
#  longitude    :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  city         :string
#  state        :string
#  category     :string
#  url          :string
#  source       :string
#  src_id       :string
#

class Venue < ApplicationRecord
  has_many :events
  has_many :artists, :through => :events

  def self.search(term)
    result = []
    words = term.downcase.gsub(',',' ').split(/\s+/)
    
    Venue.all.each do |v|
      target = (v.name || "").strip.downcase + " " + (v.bio || "").strip.downcase + (v.neighborhood || "").strip.downcase +
      (v.address_1 || "").strip.downcase + (v.category || "").strip.downcase
      
      words.each do |w|
        if target.include?(w)
          result.push(v)
          break
        end
      end
    end
    
    result
  end
end
