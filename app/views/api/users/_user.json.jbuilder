

json.extract! user, :id, :username, :password, :city, :lunches, :picture_url
json.joined_lunches user.lunches do |lunch|
  json.extract! lunch, :date_time, :place, :details, :host_id, :city_id, :id
  json.host lunch.host
end
json.hosted_lunches user.hosted_lunches do |lunch|
  json.extract! lunch, :date_time, :place, :details, :host_id, :city_id, :id
  json.host lunch.host
end
