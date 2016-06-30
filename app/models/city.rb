class City < ActiveRecord::Base
  validates :image_url, presence: true
end
