class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    unless user_signed_in?
      redirect_to new_user_session_path, notice: "You have to be siged in to use this app."
    end
  end
end
