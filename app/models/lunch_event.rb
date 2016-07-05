class LunchEvent < ActiveRecord::Base
  validates :date_time, :place, :host_id, :city_id, :time, presence: true

  belongs_to :city, class_name: "City"
  belongs_to :host, class_name: "User", foreign_key: "host_id"
  has_many :attendees, class_name: "LunchAttendee", foreign_key: "lunch_id"
end
