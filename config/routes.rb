Rails.application.routes.draw do
  resources :users, defaults: {format: :json}
  post 'user_token' => 'user_token#create'
  resources :posts, defaults: {format: :json}
  post 'newpost' => 'posts#create'
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
