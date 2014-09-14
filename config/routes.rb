Rails.application.routes.draw do
  root 'application#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  get  'api/list/all', to: 'list#index'
  get  'api/list/:id', to: 'list#show'
  put  'api/list/:id', to: 'list#update'
  post 'api/list/',    to: 'list#create'

  get '*path', to: 'application#index'
end
