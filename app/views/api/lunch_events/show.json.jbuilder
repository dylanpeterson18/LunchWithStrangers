json.extract! @lunch, :host_id, :details, :place, :city_id, :date_time, :time
json.attendees @lunch.attendees, :id
