class LocationpriceController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
    @prices = Locationprice.find(params[:locationId]).locationprices
    @message = "Found #{@prices.count} Prices"
  end

  def update
    @price = Locationprice.find(params[:id])
    if @price
      @price.item.update!({name: params[:name]})
      if @price.update!(item_params)
        @message = "Updated item succesfully!"
      else
        @message = "Updating item failed!"
      end
    else
      @message = "Item not found!"
    end
  end

  def show
    @price = Locationprice.find(params[:id])
    @message = "Found #{@price.name}"
  end

  def destroy
    price = Locationprice.find(params[:id])
    @message = "Deleted price #{price.name}"
    price.destroy
  end

  def create
    location = Location.find(params[:locationId])
    if params[:itemId]
      realitem = Item.find(params[:itemId])
    else
      realitem = Item.where(name: params[:name]).first_or_create
    end
    @price = location.locationprices.create({item_id: realitem.id, value: params[:value]})
    if @price.save
      @message = "Added #{realitem.name}'s price succesfully!"
    else
      @message = "Error during price addition!"
    end
  end

  private
    def locationprice_params
      params.require(:locationprice).permit(:value)
    end
end
