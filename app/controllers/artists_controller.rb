class ArtistsController < ApplicationController
  respond_to :json

  def index
    artists =[]
    Artist.order(:name).each do |artist|
      artists.push({:id => artist.id, :name => artist.name, :image_url => artist.image_url, :is_mentor => artist.is_mentor, :genre_id => artist.genre_id})
    end
    
    render :json => artists
  end 

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      head :ok
    else
      render :json => @artist.errors.full_messages.to_sentence, :status => :bad_request
    end
  end
  
  def show
    @artist = Artist.find_by_id(params[:id])
    
    if @artist.nil?
      head :not_found
    else
      render :json => @artist
    end
  end
  
private
  def artist_params
    params.require(:artist).permit(:name, :is_mentor, :genre_id)
  end
end
