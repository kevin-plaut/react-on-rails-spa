Rails.application.routes.draw do
  scope :api do
    resources :posts, only: [:index, :update]
  end
  resources :posts, defaults: {format: :json}

  resources :users, defaults: {format: :json}
  get 'user_name/:id', to: 'users#show_name'
  post 'user_token', to: 'user_token#create'

  root 'pages#index'
  match '*paths', to: 'pages#index', via: :all
end
