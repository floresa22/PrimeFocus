const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const studyLogRouter = require("./routes/studyLog");
const usersRouter = require("./routes/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/studyLog", studyLogRouter);
app.use("/users", usersRouter);

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Successful Database connection");
});

app.listen(port, () => console.log(`server listeing on port: ${port}`));
