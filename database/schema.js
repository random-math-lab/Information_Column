const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  _id: Number,
  ownerName: String,
  guestMax: Number,
  price: Number,
  cleaningFee: Number,
  occupancyFee: Number,
  avgRating: Number,
  numReviews: Number,
  numViews: Number,
  minStay: Number,
  maxStay: Number,
  available: [String],
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
