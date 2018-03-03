class VenuesController < ApplicationController
  respond_to :html, :json
  
  def index
    @venues = Venue.order(:name).paginate(:page => params[:page])

    data = []
    @venues.each do |v|
      data.push({:id => v.id, :name => v.name, :neighborhood => v.neighborhood, :latitude => v.latitude, :longitude => v.longitude, :url => v.url})
    end
    
    respond_to do |format|
      format.html
      format.json { render :json => data }
    end    
  end
  
  def show
    @venue = Venue.find_by_id(params[:id])
    
    if @venue.nil?
      head :non_found
    else
      render :json => @venue
    end
  end
  
  def artists
    @venue = Venue.find_by_id(params[:id])
    artists = []

    if @venue.nil?
      head :non_found
    else
      @venue.artists.order(:name).limit(10).each do |artist|
        artists.push({:id => artist.id, :name => artist.name, :image_url => artist.image_url, 
                      :is_mentor => artist.is_mentor, :genre_id => artist.genre_id})
      end
      
      render :json => artists
    end
  end
  
  def events
    @venue = Venue.find_by_id(params[:id])
    events = []

    if @venue.nil?
      head :non_found
    else
      @venue.events.order('date DESC').limit(10).each do |e|
        events.push({:id => e.id, :date => e.date, :title => e.title, :description => e.description, 
                     :price_advance => e.price_advance.round(2), :price_door => e.price_door.round(2),
                     :all_ages => e.all_ages, :artist_id => e.artist_id, :venue_id => e.venue_id})
      end
      
      render :json => events
    end    
  end
end
