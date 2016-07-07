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
ActiveRecord::Base.connection.reset_pk_sequence!('lunch_attendees')

#Cities
NY = City.create!(name: "New York City", image_url: "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/005/small/nyc2-correct.jpg?1409550576")
SF = City.create!(name: "San Francisco", image_url: "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/001/small/sf.jpg?1409550565")
Boston = City.create!(name: "Boston", image_url:  "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/006/small/boston.jpg?1409550578")
LosAngeles = City.create!(name: "Los Angeles", image_url:  "http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/008/small/los_angeles.jpg?1409550582")



#Users- New York City
LizLemon = User.create!(username: "LizLemon", password: "LizLemon", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851483/Screen_Shot_2016-07-06_at_5.19.54_PM_btkodh.png")
JackDonaghy = User.create!(username: "JackDonaghy", password: "JackDonaghy", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851483/Screen_Shot_2016-07-06_at_5.20.29_PM_wuytij.png")
JennaMaroney = User.create!(username: "JennaMaroney", password: "JennaMaroney", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.21.34_PM_z7uyzm.png")
JerrySeinfeld = User.create!(username: "JerrySeinfeld", password: "JerrySeinfeld", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.21.55_PM_hthcyt.png")
GeorgeCostanza = User.create!(username: "GeorgeCostanza", password: "GeorgeCostanza", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.23.23_PM_asvhdl.png")
ElaineBenes = User.create!(username: "ElaineBenes", password: "ElaineBenes", city_id: 1, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851483/Screen_Shot_2016-07-06_at_5.22.47_PM_dgp9ck.png")

#Users- LA
TaylorSwift = User.create!(username: "TaylorSwift", password: "TaylorSwift", city_id: 4, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.23.59_PM_psdzam.png")
JasonBourne = User.create!(username: "JasonBourne", password: "JasonBourne", city_id: 4, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.24.31_PM_rh6voa.png")
GeorgeClooney = User.create!(username: "GeorgeClooney", password: "GeorgeClooney", city_id: 4, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.24.56_PM_gyrf5h.png")
KimKardashian = User.create!(username: "KimKardashian", password: "KimKardashian", city_id: 4, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.25.52_PM_hy05ir.png")


#Users - Boston
MichaelScott = User.create!(username: "MichaelScott", password: "MichaelScott", city_id: 3, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851482/Screen_Shot_2016-07-06_at_5.26.40_PM_yy54hb.png")
JimHalpert = User.create!(username: "JimHalpert", password: "JimHalpert", city_id: 3, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.27.02_PM_velwrt.png")
PamBeesly = User.create!(username: "PamBeesly", password: "PamBeesly", city_id: 3, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.28.09_PM_hkk0km.png")

#Users - SF
PeterThiel = User.create!(username: "PeterThiel", password: "PeterThiel", city_id: 2, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.29.10_PM_wvi0jh.png")
LarryEllison = User.create!(username: "LarryEllison", password: "LarryEllison", city_id: 2, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.30.09_PM_n81b0e.png")
SherylSandberg = User.create!(username: "SherylSandberg", password: "SherylSandberg", city_id: 2, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.30.39_PM_lkohtn.png")
MeganSmith = User.create!(username: "MeganSmith", password: "MeganSmith", city_id: 2, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851481/Screen_Shot_2016-07-06_at_5.31.03_PM_p77llj.png")
DylanPeterson = User.create!(username: "DylanPeterson", password: "DylanPeterson", city_id: 2, picture_url: "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467925912/Screen_Shot_2016-07-07_at_2.10.51_PM_zctlsk.png")



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
DylanLunch = LunchEvent.create!(date_time: "09-18-2016", place:  "Dylan's Apartment", host_id: 18, city_id: 2, details:  "I hope you like the site! Call me at (732) 272-7624 if you want to chat! Email: DylanPeterson18@gmail.com", time: "1:00 PM")
DylanLunch2 = LunchEvent.create!(date_time: "09-18-2016", place:  "Dylan's Apartment", host_id: 18, city_id: 1, details:  "I hope you like the site! Call me at (732) 272-7624 if you want to chat! Email: DylanPeterson18@gmail.com", time: "1:00 PM")
DylanLunch3 = LunchEvent.create!(date_time: "09-18-2016", place:  "Dylan's Apartment", host_id: 18, city_id: 3, details:  "I hope you like the site! Call me at (732) 272-7624 if you want to chat! Email: DylanPeterson18@gmail.com", time: "1:00 PM")
DylanLunch4 = LunchEvent.create!(date_time: "09-18-2016", place:  "Dylan's Apartment", host_id: 18, city_id: 4, details:  "I hope you like the site! Call me at (732) 272-7624 if you want to chat! Email: DylanPeterson18@gmail.com", time: "1:00 PM")



#lunch_attendees
LizAttendee1 = LunchAttendee.create!(user_id: 1, lunch_id: 2)
LizAttendee2 = LunchAttendee.create!(user_id: 1, lunch_id: 3)
JackAttendee1 = LunchAttendee.create!(user_id: 2, lunch_id: 1)
JackAttendee2 = LunchAttendee.create!(user_id: 2, lunch_id: 3)
JennaAttendee1 = LunchAttendee.create!(user_id: 3, lunch_id: 1)
JennaAttendee2 = LunchAttendee.create!(user_id: 3, lunch_id: 2)
JerryAttendee1 = LunchAttendee.create!(user_id: 4, lunch_id: 5)
JerryAttendee2 = LunchAttendee.create!(user_id: 4, lunch_id: 6)
CostanzaAttendee1 = LunchAttendee.create!(user_id: 5, lunch_id: 4)
CostanzaAttendee2 = LunchAttendee.create!(user_id: 5, lunch_id: 6)
ElaineAttendee1 = LunchAttendee.create!(user_id: 6, lunch_id: 5)
ElaineAttendee2 = LunchAttendee.create!(user_id: 6, lunch_id: 4)
TaylorAttendee1 = LunchAttendee.create!(user_id: 7, lunch_id: 10)
TaylorAttendee2 = LunchAttendee.create!(user_id: 7, lunch_id: 9)
JasonAttendee1 = LunchAttendee.create!(user_id: 8, lunch_id: 9)
JasonAttendee2 = LunchAttendee.create!(user_id: 8, lunch_id: 7)
ClooneyAttendee1 = LunchAttendee.create!(user_id: 9, lunch_id: 7)
ClooneyAttendee2 = LunchAttendee.create!(user_id: 9, lunch_id: 10)
KimAttendee1 = LunchAttendee.create!(user_id: 10, lunch_id: 7)
KimAttendee2 = LunchAttendee.create!(user_id: 10, lunch_id: 9)
MichaelAttendee1 = LunchAttendee.create!(user_id: 11, lunch_id: 12)
MichaelAttendee2 = LunchAttendee.create!(user_id: 11, lunch_id: 13)
JimAttendee1 = LunchAttendee.create!(user_id: 12, lunch_id: 11)
JimAttendee2 = LunchAttendee.create!(user_id: 12, lunch_id: 13)
PamAttendee1 = LunchAttendee.create!(user_id: 13, lunch_id: 11)
PamAttendee2 = LunchAttendee.create!(user_id: 13, lunch_id: 12)
PeterAttendee1 = LunchAttendee.create!(user_id: 14, lunch_id: 15)
PeterAttendee2 = LunchAttendee.create!(user_id: 14, lunch_id: 16)
LarryAttendee1 = LunchAttendee.create!(user_id: 15, lunch_id: 14)
LarryAttendee2 = LunchAttendee.create!(user_id: 15, lunch_id: 16)
SherylAttendee1 = LunchAttendee.create!(user_id: 16, lunch_id: 17)
SherylAttendee2 = LunchAttendee.create!(user_id: 16, lunch_id: 14)
MeganAttendee1 = LunchAttendee.create!(user_id: 17, lunch_id: 16)
MeganAttendee2 = LunchAttendee.create!(user_id: 17, lunch_id: 14)



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
