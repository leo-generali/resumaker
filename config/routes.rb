Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }

  scope 'resumes' do
    root 'resumes#index', as: 'resume_page_root'
    get '/editor', to: 'resumes#create', as: 'resume_editor'
  end

  root to: 'home#index', as: 'application_root'
end
