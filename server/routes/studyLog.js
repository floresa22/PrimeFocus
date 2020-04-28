const router = require("express").Router();
const StudyLog = require("../models/studyLogModel");

router.get("/", (req, res) => {
  StudyLog.find()
    .then((logs) => res.json(exercises))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newLog = new StudyLog({
    username,
    description,
    duration,
    date,
  });
});

module.exports = router;
