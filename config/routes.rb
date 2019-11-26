Rails.application.routes.draw do
  get 'index/index'
  get 'admin/index'
  get 'static_pages/home'
  root 'index#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
