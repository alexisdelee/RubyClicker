Rails.application.routes.draw do
  get "game(/:playerId)" => "game#index", as: :game_frame
  resources :players
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
