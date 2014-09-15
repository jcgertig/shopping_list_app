Rails.application.routes.draw do
  root 'application#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  get    'api/list/all',    to: 'list#index'
  post   'api/list/create', to: 'list#create'
  delete 'api/list/:id',    to: 'list#destroy'
  get    'api/list/:id',    to: 'list#show'
  put    'api/list/:id',    to: 'list#update'

  get    'api/location/all',    to: 'location#index'
  get    'api/location/search', to: 'location#search'
  post   'api/location/create', to: 'location#create'
  delete 'api/location/:id',    to: 'location#destroy'
  get    'api/location/:id',    to: 'location#show'
  put    'api/location/:id',    to: 'location#update'

  get '*path', to: 'application#index'
end
