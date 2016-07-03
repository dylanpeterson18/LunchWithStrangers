class LunchEvent < ActiveRecord::Base
  validates :date_time, :place, :host_id, :city_id, presence: true

  belongs_to :city

end
