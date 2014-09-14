class ListController < ApplicationController
  respond_to :json

  skip_before_action :verify_authenticity_token

  def index
    count =
    @lists = List.all.order("updated_at DESC")
  end

  def
end
