# Schema Information

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## lunches
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users/hosts), indexed
date        | datetime  | not null
description | string    |
city        | string    | not null, indexed

- how are day/time properly stored?

## lunchattendees
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
lunch_id    | integer   | not null, foreign key (references lunches), indexed
date        | datetime  | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
