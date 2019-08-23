const mysql = require("mysql");
const seeder = require("../seeder.js")

const db = mysql.createConnection({
    user: 'omega1984',
    password: '1917',
    database: 'reservation'
})

db.connect((err) => {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('connected to database')
    }
})

db.query("TRUNCATE TABLE guests")
for (let i = 0; i < seeder.allData.length; i++){
    let currentData = seeder.allData[i];
    let sql = `INSERT INTO guests (price, availability, numberOfGuests, ratings, numberOfRatings, numberOfViews) values (?, ?, ?, ?, ?, ?)`
    db.query(sql, [currentData.price, currentData.availability, currentData.numberOfGuests, currentData.ratings, currentData.numberOfRatings, currentData.numberOfViews])
}

module.exports.db = db;