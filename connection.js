const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/BlogDataBase"; 

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});
