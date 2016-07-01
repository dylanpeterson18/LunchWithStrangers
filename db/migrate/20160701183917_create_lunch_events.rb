class CreateLunchEvents < ActiveRecord::Migration
  def change
    create_table :lunch_events do |t|

      t.timestamps null: false
    end
  end
end
