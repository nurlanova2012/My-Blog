const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.listen("500", () => {
  console.log("server is running");
});

dotenv.config();

mongoose
  .connect(process.env.DB_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected DB"))
  .catch((err) => console.log("err"));

app.use("/", (req, res) => {
  console.log("hello, this is main url");
});
