Rails.application.routes.draw do
  resources :notes
  resources :memberships
  resources :tasks
  resources :task_lists do
    resources :memberships
  end
  resources :projects do
    resources :memberships
  end
  use_doorkeeper
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
