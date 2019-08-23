const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../react-client/dist'));


// app.get('/api/guests', (req, res) =>{
//   db.query(`SELECT * FROM guests`, (err, data) =>{
//     if (err){
//       console.log("retrieving data from database failed", err);
//     }else{
//       console.log("here is the data from database: ", data);
//       res.send(data);
//     }
//   })
// })




app.listen(PORT, ()=>{
  console.log(`server is connected on port:  ${PORT}`);
})