Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #Will need to cordon off a /api (or similar) section of routes before the "get '*all'" declaration as applicable
  root 'application#index'
  get '*all', to: 'application#index'
end
