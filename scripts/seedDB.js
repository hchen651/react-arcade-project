const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://henry:crew92@ds261486.mlab.com:61486/heroku_mf63n599"
);

const userSeed = [
  {
    password: "testpass",
    firstName: "Admin",
    lastName: "Account",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "project@imprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: "10003"
  },
  {
    password: "testpass",
    firstName: "Rachael",
    lastName: "Tseng",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "project@imprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: "10003"
  },
  {
    password: "testpass",
    firstName: "Henry",
    lastName: "Chen",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "henry@imprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: "10003"
  }
];

const cardSeed = [
  {
    firstName: "Patrick",
    lastName: "Bateman",
    cardType: "Small Business",
    companyName: "Pierce & Pierce",
    email: "silianrail@pierce.inc",
    phone: "(212)555-6342",
    website: "pierceandpierce.com",
    street: "358 Exchange Place",
    city: "New York",
    state: "NY",
    zipcode: "10099"
  },
  {
    firstName: "David",
    lastName: "Patten",
    cardType: "Small Business",
    companyName: "Pierce & Pierce",
    email: "eggshell@pierce.inc",
    phone: "(212)555-6342",
    website: "pierceandpierce.com",
    street: "358 Exchange Place",
    city: "New York",
    state: "NY",
    zipcode: "10099"
  },
  {
    firstName: "Timothy",
    lastName: "Bryce",
    cardType: "Small Business",
    companyName: "Pierce & Pierce",
    email: "palenimbuswhite@pierce.inc",
    phone: "(212)555-6342",
    website: "pierceandpierce.com",
    street: "358 Exchange Place",
    city: "New York",
    state: "NY",
    zipcode: "10099"
  },
  {
    firstName: "Paul",
    lastName: "Allen",
    cardType: "Small Business",
    companyName: "Pierce & Pierce",
    email: "watermark@pierce.inc",
    phone: "(212)555-6342",
    website: "pierceandpierce.com",
    street: "358 Exchange Place",
    city: "New York",
    state: "NY",
    zipcode: "10099"
  },
    {
    firstName: "John",
    lastName: "Wick",
    cardType: "Personal",
    companyName: "Freelance",
    email: "doglover101@babayaga.net",
    phone: "(123)456-7890",
    website: "",
    street: "2 South William Street",
    city: "New York",
    state: "NY",
    zipcode: "10004"
  }
];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

