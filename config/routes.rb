Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resource :users, only: [:create, :show]
    resources :job_categories, only: [:index]
    resources :job_posts, only: [:create, :show, :index]
  end
end
