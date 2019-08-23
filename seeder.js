const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./database/reservation.js');
​
class Seeder {
  constructor() {
    this.data = [];
  }
​
  generateData() {
    for (let i = 0; i < 100; i++) {
      //initialize the object 
      let seedItem = {};
​
      seedItem.roomId = i;
​
      seedItem.price = faker.random.number({
        min: 50,
        max: 400
      });
​
      seedItem.numberOfBookings = faker.random.number({
        min: 1,
        max: 45
      });
​
      seedItem.bookings = [];
​
      for (let i = 0; i < seedItem.numberOfBookings; i++) {
        let booking = {};
        booking.checkIn = faker.date.between('2019-08-22', '2019-11-22');
        booking.duration = faker.random.number({
          min: 1,
          max: 31
        });
​
        seedItem.bookings.push(booking);
      }
​
      seedItem.price = faker.random.number({
        min: 30,
        max: 500
      });
​
      seedItem.serviceFee = faker.random.number({
        min: 1,
        max: 20
      });
​
      seedItem.minimumStay = faker.random.number({
​
      });
​
      seedItem.maxAdult = faker.random.number({
​
      });
​
      
​
​
​
}