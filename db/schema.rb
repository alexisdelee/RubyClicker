# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180226202101) do

  create_table "boost_players", force: :cascade do |t|
    t.integer "player_id"
    t.integer "boost_id"
    t.index ["boost_id"], name: "index_boost_players_on_boost_id"
    t.index ["player_id"], name: "index_boost_players_on_player_id"
  end

  create_table "boosts", force: :cascade do |t|
    t.string "icon"
    t.string "title"
    t.string "subtitle"
    t.text "description"
    t.bigint "base_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "related"
  end

  create_table "building_players", force: :cascade do |t|
    t.integer "player_id"
    t.integer "building_id"
    t.index ["building_id"], name: "index_building_players_on_building_id"
    t.index ["player_id"], name: "index_building_players_on_player_id"
  end

  create_table "buildings", force: :cascade do |t|
    t.string "icon"
    t.string "title"
    t.bigint "base_cost"
    t.float "base_generation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "pseudo"
    t.bigint "ruby_count"
    t.integer "clicks"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickers", force: :cascade do |t|
    t.bigint "cost"
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
