class City < ActiveRecord::Base
  validates :image_url, presence: true
  has_many :lunch_events
end
