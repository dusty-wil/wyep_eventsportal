require 'mechanize'
require 'open-uri'
namespace :db do
  desc "Scrape CityPaper data"
  task :scrape_venues => :environment do
    agent = Mechanize.new
    source = 'Pittsburgh City Paper'

    for idx in 1..2 do
      #page = agent.get("https://www.pghcitypaper.com/pittsburgh/LocationSearch?page=#{idx}")
      url = "https://www.pghcitypaper.com/pittsburgh/LocationSearch?page=#{idx}"
      fh = open(url).read
      fh.scan(/{"geometry":(.*?)},?\s+/).each do |venue|
        long = lat = category = neighborhood = nil
        name = url = address_1 = address_2 = nil
        city = state = zipcode = src_id = nil
        s = venue[0]
        
        if s =~ /\[(-.*?),(.*?)\]/
          long = $1.to_f
          lat = $2.to_f
        end       
        if s =~ /\"category\": \"(.*?)\"/
          category = $1
        end       
        if s =~ /\"neighborhood\": \"(.*?)\"/
          neighborhood = $1
        end       
        if s =~ /\"name\": \"(.*?)\"/
          name = $1
        end
        if s =~ /\"url\": \"(.*?)\"/
          url = $1.gsub("\\", "")
        end
        if s =~ /\"address\": \"(.*?)\"/
          address_1 = $1.gsub("&nbsp;", " ")
        end
        if s =~ /\"addresssupplement\": \"(.*?)\"/
          address_2 = $1.gsub("&nbsp;", " ")
        end
        if s =~ /\"city\": \"(.*?)\"/
          city = $1
        end
        if s =~ /\"state\": \"(.*?)\"/
          state = $1
        end
        if s =~ /\"postalcode\": \"(.*?)\"/
          zipcode = $1
        end
        if s =~ /\"id\": (\d+)/
          src_id = $1
        end
        
        if name.empty?
          puts "Could not find the name"
        else
          Venue.create!(:name => name, :neighborhood => neighborhood, :address_1 => address_1, :address_2 => address_2,
                        :zipcode => zipcode, :latitude => lat, :longitude => long, :city => city, :state => state,
                        :category => category, :url => url, :source => source, :src_id => src_id)
        end        
      end
    end
  end
end
