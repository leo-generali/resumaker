Rails.application.routes.draw do

  namespace :admin do
      resources :users
      resources :resumes
      resources :basic_infos

      root to: "users#index"
    end

  devise_for :users, controllers: { registrations: 'registrations' }

  scope 'resumes' do
    root 'resumes#index', as: 'resume_page_root'
    post '/new', to: 'resumes#create', as: 'resume_create'
  end

  get '/editor/:id', to: 'resumes#edit', as: 'resume_editor'

  scope 'api/v1/' do
    get 'resume/:id', to: 'api/editor#show'
  end

  root to: 'home#index', as: 'application_root'
end
