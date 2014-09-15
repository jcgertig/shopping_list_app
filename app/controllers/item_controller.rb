class ItemController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
    @items = Item.all
    @message = "Found #{@items.count} Locations"
  end

  def update
    @item = Item.find(params[:id])
    if @item
      if @item.update!(item_params)
        @message = "Updated item succesfully!"
      else
        @message = "Updating item failed!"
      end
    else
      @message = "Item not found!"
    end
  end

  def show
    @item = Item.find(params[:id])
    @message = "Found #{@item.name}"
  end

  def destroy
    item = Item.find(params[:id])
    @message = "Deleted item #{item.name}"
    item.destroy
  end

  def create
    @item = Item.create(item_params)
    if @item.save
      @message = "Created item #{@item.name} succesfully!"
    else
      @message = "Error during item creation!"
    end
  end

  def search
    limit = params[:limit] ? params[:limit] : 10
    @items = Item.find_by_fuzzy_name(params[:name], limit: limit)

    @message = "Found #{@items.count}"
  end

  private
    def item_params
      params.require(:item).permit(:name, :quantity)
    end
end
