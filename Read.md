-src/
index.js //server
models/
controllers/
middlewares/
utils/
services/
config/

-tests/[later]

so basiclaly the commands are-

npx sequelize init inside src we can do this

then change config.json and add database name etc in it ok

npx sequelize db:create // create database
npx sequelize model:generate --name City --attributes name:String

npx sequelize db:migrate // to add migrations

also in my sql or cmd -
mysql -u root -p

## DB DESIGN

- Airplane Table
- Flight
- Airport
- City

# Airplane Table-

- id
- model_number
- capacity
- created_at
- updated_at

Airplnae Flights one to many relationship 1:N because one airplane can be used in many flights but one flight is assocaited with only onr airplane.

# Flights-

- id
- src_airport_id
- dest_airport_id
- airplane_id
- departure_date
- arrival_date
- departure_time
- arrival_time
- Flight.No

SImilary between city and Airport

City 1 ---> N Airports

but Airport 1--->1 City

Also Airport 1--->N Flights
but

    1 Flight--->1 Airport

# City-

- id
- name

# Airport-

- id
- name
- city_id
- adress
