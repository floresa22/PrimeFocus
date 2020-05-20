const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studyLogRouter = require("./server/routes/studyLog");
const usersRouter = require("./server/routes/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/studyLog", studyLogRouter);
app.use("/users", usersRouter);

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(port, () => console.log(`server listening on port: ${port}`));
