DROP DATABASE reservation;
CREATE DATABASE reservation;
USE reservation;
CREATE TABLE IF NOT EXISTS guests (
  id int auto_increment,
  price int not null,
  ratings decimal(10, 2) not null,
  numberOfRatings int not null,
  availability boolean,
  numberOfGuests int not null,
  numberOfViews int not null,
  primary key(id)
)

