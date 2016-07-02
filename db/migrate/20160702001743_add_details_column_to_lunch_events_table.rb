class AddDetailsColumnToLunchEventsTable < ActiveRecord::Migration
  def change
    add_column :lunch_events, :details, :text
  end
end
