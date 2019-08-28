const express = require('express');
const cors = require('cors');
const { getBooking } = require('../database/index.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/guests/:hostid', (req, res) => {
  console.log(req.params)
  getBooking(req.params.hostid, (err, data) => {
    if (err) {
      res.status(404).end(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = app;
