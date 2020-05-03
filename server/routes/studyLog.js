const router = require("express").Router();
const StudyLog = require("../models/studyLogModel");

router.route('/').get((req, res) => {
  StudyLog.find()
    .then((logs) => res.json(exercises))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
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

  newLog
  .save()
  .then(() => res.json('Log saved'))s
  .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  StudyLog.findById(req.params.id)
  .then(log => res.json(log))
  .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  StudyLog.findByIdAndDelete(req.params.id)
  .then(() => res.json('deleted'))
  .catch(err => res.status(400).json(`Error: ${err}`)); 
});

router.route('/update/:id').post((req, res) => {
  StudyLog.findById(req.params.id)
  .then(log => {
    log.username = req.body.username; 
    log.description = req.body.description; 
    log.duration = Number(req.body.duration);
    log.date = Date.parse(req.body.date);

    log.save()
    .then(() => res.json('updated'))
    .catch(err => res.status(400).json(`Error: ${err}`)); 
  })
  .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;
