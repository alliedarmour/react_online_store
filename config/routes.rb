Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products do
        resources :comments, only: [:create]
      end
      resources :users, only: [:create]
      post "/signin", to: "sessions#create"
      delete "/signout", to: "sessions#destroy"
    end
  end
  root to: "products#index"

  get "/signup", to: "users#new"
  get "/signin", to: "sessions#new"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"
  resources :users, only: [:create]

end
