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