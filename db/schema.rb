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

ActiveRecord::Schema.define(version: 20160327173814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "interpreters", force: :cascade do |t|
    t.integer  "aoicid"
    t.string   "first_name"
    t.string   "middle_name"
    t.string   "last_name"
    t.string   "address1"
    t.string   "address2"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.string   "reg_email"
    t.string   "alternate_email"
    t.string   "phone"
    t.string   "alternate_phone"
    t.string   "circuit_availability"
    t.boolean  "remote_interpret_phone"
    t.boolean  "remote_interpret_video"
    t.string   "language_code"
    t.string   "language"
    t.string   "certification"
    t.datetime "expiry_date"
    t.datetime "certification_date"
    t.text     "comments"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "ilidb_id"
  end

end
