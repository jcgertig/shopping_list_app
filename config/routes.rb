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

  get    'api/item/all',    to: 'item#index'
  get    'api/item/search', to: 'item#search'
  post   'api/item/create', to: 'item#create'
  delete 'api/item/:id',    to: 'item#destroy'
  get    'api/item/:id',    to: 'item#show'
  put    'api/item/:id',    to: 'item#update'

  get    'api/list/:list_id/item/all',    to: 'listitem#index'
  get    'api/list/:list_id/item/search', to: 'listitem#search'
  post   'api/list/:list_id/item/create', to: 'listitem#create'
  delete 'api/list/:list_id/item/:id',    to: 'listitem#destroy'
  get    'api/list/:list_id/item/:id',    to: 'listitem#show'
  put    'api/list/:list_id/item/:id',    to: 'listitem#update'

  get    'api/location/:locationId/item/all',    to: 'locationprice#index'
  post   'api/location/:locationId/item/create', to: 'locationprice#create'
  delete 'api/location/:locationId/item/:id',    to: 'locationprice#destroy'
  get    'api/location/:locationId/item/:id',    to: 'locationprice#show'
  put    'api/location/:locationId/item/:id',    to: 'locationprice#update'

  get '*path', to: 'application#index'
end
