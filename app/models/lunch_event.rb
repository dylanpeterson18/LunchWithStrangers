class LunchEvent < ActiveRecord::Base
  validates :date, :place, :time, :host_id, :city_id, presence: true

  belongs_to :city

end
