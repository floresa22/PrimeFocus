const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const studyLogRouter = require("./routes/studyLog");
const usersRouter = require("./routes/user");

app.use("/studyLog", studyLogRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`server listeing on port: ${port}`));
