class AddTimeColumnToLunchEventsTable < ActiveRecord::Migration
  def change
    add_column :lunch_events, :time, :string
  end
end
