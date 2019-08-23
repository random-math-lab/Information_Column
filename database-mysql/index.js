const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const Schema = mongoose.Schema({
    roomId: Number,
    numberOfReservations:Number,
    bookings: [{
        checkInDate: Date,
        duration: Number
    }],
    price: Number,
    cleaningFee: Number,
    serviceFee: Number,
    minimumStay: Number,
    maxAdults: Number,
    maxChildren: Number,
    maxInfants: Number,
    taxes: Number,
    tipsTitle: String,
    tipsContent: String
});

