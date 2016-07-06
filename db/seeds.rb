# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
LizLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
JackLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
JennaLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
JerryLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
CostanzaLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
ElaineLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
TaylorLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
JasonLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
ClooneyLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
KimLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
MichaelLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
JimLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
PamLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
PeterLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
LarryLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
SherylLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )
MeganLunch = LunchEvent.create!(date_time: , place:  , host_id: , city_id:  , details: , time: )




date_time: "07-21-2016",
place: "jasonbourne",
host_id: 44,
city_id: 10,
details: "bourne",
time: "1:00 PM">
