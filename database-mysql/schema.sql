create table guests (
  id int not null auto_increment,
  price decimal not null,
  availability boolean,
  primary key(id)
);


INSERT INTO guests (price, availability) values (70.00, true);
INSERT INTO guests (price, availability) values (75.99, false);
INSERT INTO guests (price, availability) values (79.99, true);
INSERT INTO guests (price, availability) values (69.99, false);
INSERT INTO guests (price, availability) values (72.99, true);
INSERT INTO guests (price, availability) values (73.99, false);
INSERT INTO guests (price, availability) values (74.99, true);
INSERT INTO guests (price, availability) values (75.99, false);
INSERT INTO guests (price, availability) values (76.99, true);
INSERT INTO guests (price, availability) values (77.99, false);
