
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;