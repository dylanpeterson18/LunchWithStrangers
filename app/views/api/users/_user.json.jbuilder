# json.everything do
#
json.extract! user, :id, :username, :password, :city, :lunches
json.joined_lunches user.lunches, :date_time, :place, :details, :host_id, :city_id
json.hosted_lunches user.hosted_lunches, :date_time, :place, :details, :host_id, :city_id
# json.array! @joined_lunches do |lunch|
#     json.extract! lunch
# end
# end
