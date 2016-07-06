

json.extract! user, :id, :username, :password, :city, :lunches
json.joined_lunches user.lunches, :date_time, :place, :details, :host_id, :city_id, :id
json.hosted_lunches user.hosted_lunches, :date_time, :place, :details, :host_id, :city_id, :id
