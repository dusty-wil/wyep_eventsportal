class EventsController < ApplicationController
  respond_to :json

  def index
    events = []
    
    Event.order('date DESC').each do |e|
      events.push({:id => e.id, :date => e.date, :title => e.title, :description => e.description, 
                   :price_advance => e.price_advance.round(2), :price_door => e.price_door.round(2),
                   :all_ages => e.all_ages, :artist_id => e.artist_id, :venue_id => e.venue_id})
    end
    
    render :json => events
  end
  
  def show
    @event = Event.find_by_id(params[:id])
    
    if @event.nil?
      head :not_found
    else
      render :json => @event
    end
  end
end
