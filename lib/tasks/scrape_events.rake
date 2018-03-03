require 'mechanize'
require 'open-uri'
namespace :db do
  desc "Scrape CityPaper data"
  task :scrape_venues => :environment do
    agent = Mechanize.new
    source = 'Pittsburgh City Paper'

    # 84 pages, but need geojson instead of this -- first page is different from all others
    for idx in 1..1 do
      url = "https://www.pghcitypaper.com/pittsburgh/LocationSearch?page=#{idx}"
      fh = open(url).read
           
      fh.scan(/{"geometry":(.*?)},?\s+/).each do |venue|
        long = lat = category = neighborhood = nil
        name = url = address_1 = address_2 = nil
        city = state = zipcode = src_id = nil
        
        if venue[0] =~ /\[(-.*?),(.*?)\]/
          long = $1.to_f
          lat = $2.to_f
        end       
        if venue[0] =~ /\"category\": \"(.*?)\"/
          category = $1
        end       
        if venue[0] =~ /\"neighborhood\": \"(.*?)\"/
          neighborhood = $1
        end       
        if venue[0] =~ /\"name\":\s*\"(.*?)\"/
          name = $1.gsub("\\", "")
        end
        if venue[0] =~ /\"url\": \"(.*?)\"/
          url = $1.gsub("\\", "")
        end
        if venue[0] =~ /\"address\": \"(.*?)\"/
          address_1 = $1.gsub("&nbsp;", " ")
        end
        if venue[0] =~ /\"addresssupplement\": \"(.*?)\"/
          address_2 = $1.gsub("&nbsp;", " ")
        end
        if venue[0] =~ /\"city\": \"(.*?)\"/
          city = $1
        end
        if venue[0] =~ /\"state\": \"(.*?)\"/
          state = $1
        end
        if venue[0] =~ /\"postalcode\": \"(.*?)\"/
          zipcode = $1
        end
        if venue[0] =~ /\"id\": (\d+)/
          src_id = $1
        end
        
        if name.blank?
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
