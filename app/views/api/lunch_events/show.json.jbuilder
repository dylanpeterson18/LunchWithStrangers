json.extract! @lunch, :host_id, :details, :place, :city_id, :date_time, :time, :id
json.attendees @lunch.attendees, :user_id
