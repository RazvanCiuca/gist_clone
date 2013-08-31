SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :gists do
    resource :favorite, :only => [:create, :destroy]
  end
  resources :favorites, :only => [:index]

  root :to => "root#root"
end
