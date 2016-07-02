class ChangeDateTimeColumns < ActiveRecord::Migration
  def change
    change_column :lunch_events, :date, :datetime
    rename_column :lunch_events, :date, :date_time
    remove_column :lunch_events, :time
  end
end
