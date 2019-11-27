Rails.application.routes.draw do
  get 'index/index'
  get 'admin/index'
  get 'static_pages/home'
  get 'final_page/final_page'
  get 'game/game'
  root 'index#index'

  resources :users
  resources :stats

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
