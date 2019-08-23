DROP DATABASE reservation;
CREATE DATABASE reservation;
USE reservation;
CREATE TABLE IF NOT EXISTS guests (
  id int auto_increment,
  price int not null,
  availability boolean,
  numberOfGuests int not null,
  primary key(id)
)

