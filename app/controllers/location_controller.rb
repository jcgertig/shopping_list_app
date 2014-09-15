class LocationController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
    @locations = Location.all
    @message = "Found #{@locations.count} Locations"
  end

  def update
    @location = Location.find(params[:id])
    if @location
      if @location.update!(location_params)
        @message = "Updated location succesfully!"
      else
        @message = "Updating location failed!"
      end
    else
      @message = "Location not found!"
    end
  end

  def show
    @location = Location.find(params[:id])
    @message = "Found #{@location.name}"
  end

  def destroy
    location = Location.find(params[:id])
    @message = "Deleted location #{location.name}"
    location.destroy
  end

  def create
    @location = Location.create(location_params)
    if @location.save
      @message = "Created location #{@location.name} succesfully!"
    else
      @message = "Error during location creation!"
    end
  end

  def search
    limit = params[:limit] ? params[:limit] : 10
    @location = Location.find_by_fuzzy_name(params[:name], limit: limit)

    @message = "Found #{@users.count}"
  end

  private
    def location_params
      params.require(:location).permit(:name, :address)
    end
end
