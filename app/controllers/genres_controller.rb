class GenresController < ApplicationController
  respond_to :json

  def index
    render :json => Genre.order(:name).pluck(:id, :name)
  end 
  
  def search
    @genre = Genre.find_by_id(params[:id])
        
    if @genre.nil?
      head :not_found
    else      
      alist = @genre.artists
      elist = []
      vlist = []
      alist.each do |a|
        elist += a.events
        vlist += a.venues
      end
      
      artists =[]
      events = []
      venues = []
      alist.each do |artist|
         artists.push({:id => artist.id, :name => artist.name, :image_url => artist.image_url, :is_mentor => artist.is_mentor, :genre_id => artist.genre_id})
      end
      elist.each do |e|
        events.push({:id => e.id, :date => e.date, :title => e.title, :description => e.description, 
                     :price_advance => e.price_advance.round(2), :price_door => e.price_door.round(2),
                     :all_ages => e.all_ages, :artist_id => e.artist_id, :venue_id => e.venue_id})
      end
      vlist.each do |v|
        venues.push({:id => v.id, :name => v.name, :neighborhood => v.neighborhood, :latitude => v.latitude, :longitude => v.longitude, :url => v.url})        
      end
      
      results = {:artists => artists,
                 :events => events,
                 :venues => venues}
                 
      render :json => results
    end
  end
end
