Rails.application.routes.draw do
  root "players#index"
  get "game(/:id)" => "game#index", as: :game_frame
  resources :players, :bonus, :buildings, :tickers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
