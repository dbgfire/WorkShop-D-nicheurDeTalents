Rails.application.routes.draw do
  get 'index/index'
  get 'admin/index'
  get 'static_pages/home'
  get 'game/game'
  root 'index#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
