# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

City.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('cities')

LunchEvent.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('lunch_events')

LunchAttendee.delete_all

#Cities
NY = City.create!(name: "New York City", image_url: "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/005/small/nyc2-correct.jpg?1409550576")
SF = City.create!(name: "San Francisco", image_url: "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/001/small/sf.jpg?1409550565")
Boston = City.create!(name: "Boston", image_url:  "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/006/small/boston.jpg?1409550578")
LosAngeles = City.create!(name: "Los Angeles", image_url:  "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/008/small/los_angeles.jpg?1409550582")



#Users- New York City
LizLemon = User.create!(username: "LizLemon", password: "LizLemon", city: "New York City")
JackDonaghy = User.create!(username: "JackDonaghy", password: "JackDonaghy", city: "New York City")
JennaMaroney = User.create!(username: "JennaMaroney", password: "JennaMaroney", city: "New York City")
JerrySeinfeld = User.create!(username: "JerrySeinfeld", password: "JerrySeinfeld", city: "New York City")
GeorgeCostanza = User.create!(username: "GeorgeCostanza", password: "GeorgeCostanza", city: "New York City")
ElaineBennett = User.create!(username: "ElaineBennett", password: "ElaineBennett", city: "New York City")

#Users- LA
TaylorSwift = User.create!(username: "TaylorSwift", password: "TaylorSwift", city: "Los Angeles")
JasonBourne = User.create!(username: "JasonBourne", password: "JasonBourne", city: "Los Angeles")
GeorgeClooney = User.create!(username: "GeorgeClooney", password: "GeorgeClooney", city: "Los Angeles")
KimKardashian = User.create!(username: "KimKardashian", password: "KimKardashian", city: "Los Angeles")


#Users - Boston
MichaelScott = User.create!(username: "MichaelScott", password: "MichaelScott", city: "Boston")
JimHalpert = User.create!(username: "JimHalpert", password: "JimHalpert", city: "Boston")
PamBeesly = User.create!(username: "PamBeesly", password: "PamBeesly", city: "Boston")

#Users - SF
PeterThiel = User.create!(username: "PeterThiel", password: "PeterThiel", city: "San Francisco")
LarryEllison = User.create!(username: "LarryEllison", password: "LarryEllison", city: "San Francisco")
SherylSandberg = User.create!(username: "SherylSandberg", password: "SherylSandberg", city: "San Francisco")
MeganSmith = User.create!(username: "MeganSmith", password: "MeganSmith", city: "San Francisco")

#Lunches
LizLunch = LunchEvent.create!(date_time: "08-22-2016", place: "Hot Dog stand outside 30 Rock" , host_id: 1, city_id: 1 , details: "I'll bring enough Cheesy Blasters for everyone!", time: "11:30 AM")
JackLunch = LunchEvent.create!(date_time: "08-30-2016", place:  "Plunder on E 85th St.", host_id: 2, city_id: 1, details: "best dessert in NYC - for only $1000! Remember to wear a tuxedo. We're not farmers" , time: "1:00 PM")
JennaLunch = LunchEvent.create!(date_time: "09-08-2016", place:  "Outback SteakHouse in Greenwich Village", host_id: 3 , city_id: 1, details: "No rules, just right ;)" , time: "3:30 PM")
JerryLunch = LunchEvent.create!(date_time: "09-14-2016", place:  "Tom's Restaurant W 95th St.", host_id: 4, city_id: 1, details: "None of that 'No soup for you' nonsense", time: "12:00 PM")
CostanzaLunch = LunchEvent.create!(date_time: "08-09-2016", place:  "Subway near Yankee Stadium", host_id: 5, city_id: 1, details: "I went through all this trouble to host the lunch - the least everyone can do is pitch in for my meal", time: "1:30 PM")
ElaineLunch = LunchEvent.create!(date_time: "08-25-2016", place:  "Peterman's Office", host_id: 6, city_id: 1, details: "Bring ideas to help with my men's catalog descriptions", time: "2:30 PM")
TaylorLunch = LunchEvent.create!(date_time: "08-26-2016", place: "Taylor Swifts house", host_id: 7, city_id: 4, details: "I'll be with my boyfriend... TBD by the date of this lunch", time: "2:00 PM")
JasonLunch = LunchEvent.create!(date_time: "09-03-2016", place: "My Secret Lunch Spot in the warehouse on 2nd Ave", host_id: 8, city_id: 4, details: "Leave any cellphones aka tracking devices at home", time: "1:00 PM")
ClooneyLunch = LunchEvent.create!(date_time: "09-16-2016", place:  "George Clooneys house", host_id: 9, city_id: 4, details: "Wear sunglasses to stop the sun from reflecting off my perfect smile", time: "1:30 PM")
KimLunch = LunchEvent.create!(date_time: "09-29-2016", place: "Nobu 903 N La Cienega Blvd", host_id: 10, city_id: 4, details: "No paparazzi please - I already brought my own", time: "12:00 PM")
MichaelLunch = LunchEvent.create!(date_time: "09-07-2016", place: "Chili's on Wilkes-Barre Rd.", host_id: 11, city_id: 3, details: "I'll be wearing my Michael Klump outift!", time: "11:30 AM")
JimLunch = LunchEvent.create!(date_time: "08-27-2016", place:  "Poor Richard's Pub on Main Ave.", host_id: 12, city_id: 3, details: "I'll be sitting in the back!", time: "1:00 PM")
PamLunch = LunchEvent.create!(date_time: "09-01-2016", place:  "The Smoke House Restaurant on Redwood St.", host_id: 13, city_id: 3, details: "Would love to share any artwork! All types and media welcome!", time: "2:00 PM")
PeterLunch = LunchEvent.create!(date_time: "09-26-2016", place: "Peter Thiel" , host_id: 14, city_id: 2, details: "Peter Thiel", time: "12:30 PM")
LarryLunch = LunchEvent.create!(date_time: "08-17-2016", place: "Larry Ellison" , host_id: 15, city_id: 2, details: "Larry Ellison", time: "2:00 PM")
SherylLunch = LunchEvent.create!(date_time: "07-26-2016", place:  "Sheryl", host_id: 16, city_id: 2, details: "Sheryl", time: "3:30 PM")
MeganLunch = LunchEvent.create!(date_time: "09-09-2016", place:  "Megan", host_id: 17, city_id: 2, details:  "Megan", time: "1:00 PM")



# 1 NY
# 2 SF
# 3 Boston
# 4 LA
#
#
# date_time: "07-21-2016",
# place: "jasonbourne",
# host_id: 44,
# city_id: 10,
# details: "bourne",
# time: "1:00 PM">
