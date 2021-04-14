const Bootcamp = require("../models/Bootcamp");

exports.getAllBootcamps = (req, res, next) => {
  res.send("Get all bootcamps route");
};

exports.createNewBootcamp = (req, res, next) => {
  res.send("Create new bootcamp route");
};

exports.updateBootcampById = (req, res, next) => {
  res.send("Update a bootcamp by id route");
};

exports.deleteBootcampById = (req, res, next) => {
  res.send("Delete a bootcamp by id route");
};
