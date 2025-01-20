const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://codemanifestor:l8wFkXmIXOYLOOLN@codemenifestor.g0uis.mongodb.net/devTinder");
};

module.exports = connectDB;
