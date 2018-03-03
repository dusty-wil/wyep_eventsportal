# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
if 0 == Genre.count
  Genre.create!(:name => "Blues")
  Genre.create!(:name => "Classical")
  Genre.create!(:name => "Country")
  Genre.create!(:name => "Dance & Electronic")
  Genre.create!(:name => "Folk")
  Genre.create!(:name => "Instrumental")
  Genre.create!(:name => "Jazz")
  Genre.create!(:name => "Metal")
  Genre.create!(:name => "Pop")
  Genre.create!(:name => "Punk")
  Genre.create!(:name => "R & B")
  Genre.create!(:name => "Rap & Hip Hop")
  Genre.create!(:name => "Rock")
  Genre.create!(:name => "Spiritual")
  Genre.create!(:name => "World Music")
 end
 
if 0 == Artist.count
  Artist.create!(:name => "Joe Satriani", :is_mentor => true, :genre_id => Genre.find_by_name("Rock").id)
  Artist.create!(:name => "Metallica", :is_mentor => true, :genre_id => Genre.find_by_name("Metal").id)
  Artist.create!(:name => "Modest Mouse", :is_mentor => false, :genre_id => Genre.find_by_name("Rock").id)
  Artist.create!(:name => "Britney Spears", :is_mentor => false, :genre_id => Genre.find_by_name("Pop").id)
  Artist.create!(:name => "Kenny Chesney", :is_mentor => false, :genre_id => Genre.find_by_name("Country").id)
  Artist.create!(:name => "Donnie Iris", :is_mentor => false, :genre_id => Genre.find_by_name("Folk").id)
end

if 0 == Event.count
  Event.create!(:artist_id => Artist.find_by_name('Metallica').id, :venue_id => Venue.find_by_name('61B Cafe').id, 
                :date => 10.days.from_now, :title => 'Metallica at 61B', :description => 'This is a description',
                :price_advance => 150, :price_door => 200, :all_ages => false)

  Event.create!(:artist_id => Artist.find_by_name('Joe Satriani').id, :venue_id => Venue.find_by_name('12 Peers Theater').id, 
                :date => 11.days.from_now, :title => 'Crazy Joe!', :description => 'This is another description',
                :price_advance => 150, :price_door => 200, :all_ages => true)

  Event.create!(:artist_id => Artist.find_by_name('Modest Mouse').id, :venue_id => Venue.find_by_name('1311').id, 
                :date => 30.days.from_now, :title => 'Mouse in the house!', :description => 'This is Modest Mouse',
                :price_advance => 15, :price_door => 230, :all_ages => true)

  Event.create!(:artist_id => Artist.find_by_name('Britney Spears').id, :venue_id => Venue.find_by_name('15 Minutes Gallery').id, 
                :date => 10.month.from_now, :title => "It's Britney, bitches!", :description => 'This is another description',
                :price_advance => 20, :price_door => 50, :all_ages => false)

  Event.create!(:artist_id => Artist.find_by_name('Donnie Iris').id, :venue_id => Venue.find_by_name('1613 Saloon').id, 
                :date => 1.year.from_now, :title => 'Back in da Burgh!', :description => 'Go Dahntahn yinz!!',
                :price_advance => 15, :price_door => 20, :all_ages => true)
end
