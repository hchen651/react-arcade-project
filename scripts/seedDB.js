const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://admin:henryrachael92@ds339968.mlab.com:39968/heroku_phjmfqm2"
);

const userSeed = [
  {
    username: "testuser",
    password: "testpass"
  }
];

// db.User
//   .remove({})
//   .then(() => db.Card.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

