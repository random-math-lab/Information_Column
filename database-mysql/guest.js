const faker = require('faker/index');

let randomCard = faker.helper.userCard();

console.log(JSON.stringify(randomCard, null, 2));