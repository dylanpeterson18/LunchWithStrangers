# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160707001512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
  end

  create_table "create_lunch_attendees_tables", force: :cascade do |t|
    t.integer  "lunch_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lunch_attendees", force: :cascade do |t|
    t.integer  "lunch_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lunch_events", force: :cascade do |t|
    t.string   "date_time",  null: false
    t.string   "place",      null: false
    t.integer  "host_id",    null: false
    t.integer  "city_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "details"
    t.string   "time"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "city"
    t.string   "picture_url"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
