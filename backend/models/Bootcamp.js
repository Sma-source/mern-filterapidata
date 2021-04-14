const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provid a name to the bootcamp"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true.valueOf, "Please provid a rating"],
  },
  description: {
    type: String,
    required: [true, "Please provid a description"],
  },
  price: {
    type: Number,
    required: [true, "Please provid a price"],
  },
});

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);

module.exports = Bootcamp;
