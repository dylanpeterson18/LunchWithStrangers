class LunchAttendee < ActiveRecord::Base
  validates :user_id, :lunch_id, presence: true

  belongs_to :user, class_name: "User"
  belongs_to :lunch_event, class_name: "LunchEvent", foreign_key: "lunch_id"

end
