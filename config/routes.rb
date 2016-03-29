Rails.application.routes.draw do
  resources :interpreters
  root "page#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/default_menu_sort" => 'interpreters#default_menu_sort'
end
