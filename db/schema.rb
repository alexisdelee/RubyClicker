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

ActiveRecord::Schema.define(version: 20180124005342) do

  create_table "bonus", force: :cascade do |t|
    t.string "icon"
    t.string "name"
    t.string "subtitle"
    t.text "description"
    t.bigint "cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buildings", force: :cascade do |t|
    t.string "icon"
    t.string "name"
    t.bigint "base_cost"
    t.bigint "base_cookies_per_seconds"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "pseudo"
    t.integer "ruby_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "buildings_id"
    t.integer "bonus_id"
    t.index ["bonus_id"], name: "index_players_on_bonus_id"
    t.index ["buildings_id"], name: "index_players_on_buildings_id"
  end

  create_table "tickers", force: :cascade do |t|
    t.bigint "trigger"
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
