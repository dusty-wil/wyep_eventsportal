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
    @venue = Venue.find(params[:id])
    
    render :json => @venue
  end
end
