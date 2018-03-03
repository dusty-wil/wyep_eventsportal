class StaticPagesController < ApplicationController
  respond_to :json, :html
  
  def home   
    render :layout => false
  end
  
  def search
    puts params
    term = params
    
    results = {:artists => Artist.search(term),
               :events => Event.search(term),
               :venues => Venue.search(term)}
    respond_to do |format|
      format.html
      format.json { render :json => results }
    end
  end
end
