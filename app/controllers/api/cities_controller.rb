class Api::CitiesController < ApplicationController

  def index
    @cities = City.all
    render :index
  end

  def show
    @city = City.find(params[:id])
  end

end
