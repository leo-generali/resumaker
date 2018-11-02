Rails.application.routes.draw do

  # User Registration
  # devise_scope :user do
  #   get '/login', to: 'devise/sessions#new', as: 'new_user_session' # custom path to login/sign_in
  #   get '/register', to: 'devise/registrations#new', as: 'new_user_registration' # custom path to sign_up/registration
  # end

  devise_for :users, controllers: { registrations: 'registrations' }

  scope 'resumes' do
    root 'resumes#index', as: 'resume_page_root'
    post '/new', to: 'resumes#create', as: 'resume_create'
    get '/editor', to: 'resumes#edit', as: 'resume_editor'
  end

  root to: 'home#index', as: 'application_root'
end
