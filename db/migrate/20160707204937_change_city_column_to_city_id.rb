class ChangeCityColumnToCityId < ActiveRecord::Migration
  def change
    rename_column :users, :city, :city_id

  end
end
