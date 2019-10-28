const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = require("./card");

const userSchema = new Schema({
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cardType: String,
    companyName: String,
    phone: {
        type: String,
        min: [10, 'Please enter a valid phone number.'],
        max: [10, 'Please enter a valid phone number.'],
    },
    website: String,
    street: String,
    city: String,
    state: String,
    zipcode: {
        type: String,
        min: [5, 'Please enter a valid ZIP code.'],
        max: [5, 'Please enter a valid ZIP code.'],
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
