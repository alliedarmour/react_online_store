Rails.application.routes.draw do
  root to: "products#index"

  get "/signup", to: "users#new"
  get "/signin", to: "sessions#new"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  resources :products do
    resources :comments, only: [:create]
  end
  resources :users, only: [:create]

end
