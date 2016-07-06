json.extract! @lunch, :host_id, :details, :place, :city_id, :date_time, :time, :id


json.host @lunch.host
# json.attendees lunch.attendees, :user_id, :username
json.attendees @lunch.attendees do |attendee|
  json.extract! attendee, :user_id
  json.host_name attendee.user.username
end
