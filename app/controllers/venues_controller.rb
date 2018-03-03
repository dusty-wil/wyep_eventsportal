class VenuesController < ApplicationController
  def index
    @venues = Venue.order(:name).paginate(:page => params[:page])
  end
end
