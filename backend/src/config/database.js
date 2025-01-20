const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("databaseURL");
};

module.exports = connectDB;
