class DateColumnToTypeString < ActiveRecord::Migration
  def change
    change_column :lunch_events, :date_time, :string
  end
end
