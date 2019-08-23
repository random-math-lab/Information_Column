getPrice = () =>{
  return Math.floor(Math.random()*141) + 60;
}

getAvailability = () =>{
  return Math.floor(Math.random()*2) === 1;
}

getNumberOfGuests = () =>{
  return Math.floor(Math.random()*7) + 4;
}

getReservationInfo = (id) =>{
  let info = {};
  info = {
    id: id,
    price: getPrice(),
    availability: getAvailability(),
    numberOfGuests: getNumberOfGuests()
  }
  return info;
}

let allData = [];
for (let i = 1; i < 101; i++){
  allData.push(getReservationInfo(i))
}

module.exports.allData = allData;