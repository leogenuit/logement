const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  square_meters: {
    type: Number,
    required: true,
  },
});

const Apartment = mongoose.model("apartments", apartmentSchema);
module.exports = Apartment;
