class CreateLunchAttendees < ActiveRecord::Migration
  def change
    create_table :lunch_attendees do |t|
      t.integer :lunch_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
