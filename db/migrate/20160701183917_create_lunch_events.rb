class CreateLunchEvents < ActiveRecord::Migration
  def change
    create_table :lunch_events do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.string :place, null: false
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.timestamps null: false
    end
  end
end
