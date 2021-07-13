Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show, :show_some] 
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :cart_items
    
    get '/user_cart_items/:id', to: 'products#cart_item_products', as: 'cart_item_products'
    delete '/user_cart_items/delete_all/:id', to: 'cart_items#destroy_all', as: 'destroy_all'
    get '/category/:category_id', to: 'products#all_category_products', as: 'all_category_products'
    get '/search', to: 'products#search_products', as: 'search_products'
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

