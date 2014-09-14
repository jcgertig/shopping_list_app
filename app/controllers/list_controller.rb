class ListController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
    @lists = List.all
    @message = "Found #{@lists.count} Lists"
  end

  def update
    @list = List.find(params[:id])
    if @list
      if @list.update!(list_params)
        @message = "Updated list succesfully!"
      else
        @message = "Updating list failed!"
      end
    else
      @message = "List not found!"
    end
  end

  def show
    @list = List.find(params[:id])
    @message = "Found #{@list.name}"
  end

  def destroy
    list = List.find(params[:id])
    @message = "Deleted list #{list.name}"
    list.destroy
  end

  def create
    @list = List.create(list_params)
    if @list.save
      @message = "Created list #{@list.name} succesfully!"
    else
      @message = "Error during list creation!"
    end
  end

  private
    def list_params
      params.require(:list).permit(:name)
    end
end
