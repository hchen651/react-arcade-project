const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    firstName: String,
    lastName: String,
    cardType: String,
    companyName: String,
    email: String,
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
    },
    notes: String
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
