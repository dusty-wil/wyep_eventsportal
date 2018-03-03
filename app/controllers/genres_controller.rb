class GenresController < ApplicationController
  respond_to :json

  def index
    render :json => Genre.order(:name).pluck(:id, :name)
  end 
end
