getPrice = () =>{
  return Math.floor(Math.random()*141) + 60;
}

getAvailability = () =>{
  return Math.floor(Math.random()*2) === 1;
}

getNumberOfGuests = () =>{
  return Math.floor(Math.random()*7) + 4;
}

getRatings = () =>{
  return (Math.floor(Math.random()*101) + 400)/100;
}

getNumberOfRatings = () =>{
  return Math.floor(Math.random()*301) + 100;
}

getViews = () =>{
  return Math.floor(Math.random()*401) + 100;
}

getReservationInfo = (id) =>{
  let info = {};
  info = {
    id: id,
    price: getPrice(),
    availability: getAvailability(),
    numberOfGuests: getNumberOfGuests(),
    ratings: getRatings(),
    numberOfRatings: getNumberOfRatings(),
    numberOfViews: getViews()
  }
  return info;
}

let allData = [];
for (let i = 1; i < 101; i++){
  allData.push(getReservationInfo(i))
}

module.exports.allData = allData;