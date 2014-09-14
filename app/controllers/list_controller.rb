class ListController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  respond_to :json

  def index
  end

  def update
  end

  def show
  end

  def destroy
  end

  def create
  end
end
