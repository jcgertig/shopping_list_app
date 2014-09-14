Rails.application.routes.draw do
  root 'application#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  get '*path', to: 'application#index'
end
