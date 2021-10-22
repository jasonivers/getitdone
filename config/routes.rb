Rails.application.routes.draw do
  resources :documents
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
  devise_scope :user do
    authenticated :user do
      root 'projects#index', as: :authenticated_root
    end
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
