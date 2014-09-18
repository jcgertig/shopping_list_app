class ListitemController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
    list = List.find(params[:list_id])
    @items = list.listitems.uniq
    @message = "Found #{@items.count} Locations"
  end

  def update
    @item = Listitem.find(params[:id])
    if @item
    @item.item.update!({name: params[:name]})
      if @item.update!(item_params)
        @item = Listitem.find(params[:id])
        @message = "Updated item succesfully!"
      else
        @message = "Updating item failed!"
      end
    else
      @message = "Item not found!"
    end
  end

  def show
    @item =  Listitem.find(params[:id])
    @message = "Found #{@item.name}"
  end

  def destroy
    item =  Listitem.find(params[:id])
    @message = "Removed list item"
    item.destroy
  end

  def create
    list = List.find(params[:list_id])
    if params[:itemId]
      realitem = Item.find(params[:itemId])
    else
      realitem = Item.where(name: params[:name]).first_or_create
    end
    @item = list.listitems.create({item_id: realitem.id, quantity: params[:quantity], gotten: false})
    if @item.save
      @message = "Added item #{realitem.name} succesfully!"
    else
      @message = "Error during item addition!"
    end
  end

  def search
    list = List.find(params[:list_id])
    limit = params[:limit] ? params[:limit] : 10
    @items = Item.find_by_fuzzy_name(params[:name], limit: limit)

    @message = "Found #{@items.count}"
  end

  private
    def item_params
      params.require(:listitem).permit(:quantity, :gotten)
    end
end
