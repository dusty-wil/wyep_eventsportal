require 'mechanize'

namespace :db do
  desc "Scrape CityPaper data"
  task :scrape_venues => :environment do
    agent = Mechanize.new
    page = agent.get('https://www.pghcitypaper.com/pittsburgh/LocationSearch')
    #for idx in 2..84 do
    #end
  end
end
