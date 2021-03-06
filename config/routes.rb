Rails.application.routes.draw do

  namespace :admin do
    resources :users
    resources :resumes
    resources :basic_infos
    resources :education_infos
    resources :skill_infos
    resources :job_infos

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
    put 'add-skill', to: 'api/skill_infos#add_skill'
    delete 'remove-skill', to: 'api/skill_infos#remove_skill'
    put 'add-skill-category', to: 'api/skill_infos#add_skill_category'
    delete 'remove-skill-category', to: 'api/skill_infos#remove_skill_category'
    get 'generate-pdf', to: 'resume_editor#generate_pdf', as: 'generate_resume'
  end

  root to: 'home#index', as: 'application_root'
end
