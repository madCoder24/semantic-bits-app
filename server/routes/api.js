const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adverse');

var PatientSchema = new mongoose.Schema({
  drugs: {type: [DrugSchema]},
  reaction: {type: [ReactionSchema]},
  age: String,
  sex: String
});

var DrugSchema = new mongoose.Schema({
  authorizationNumber: String,
  dosageText: String,
  medicinalProduct: String,
  drugIndication: String
});

var ReactionSchema = new mongoose.Schema({
  meddraPrimaryTerm: String
});

var AdverseEventSchema = new mongoose.Schema({
  receiveDate: String,
  receiptDate: String,
  patient: PatientSchema,
  safetyReportId: String,
  companyNumber: String
}, {collection: 'adverseEvents'});

var Events = mongoose.model('adverseEvents', AdverseEventSchema);

/* GET api listing. */
router.get('/', (req, res) => {
  Events.find((err, events) => {
    if (err) {
      console.log(err);
    }
    res.json(events);
  });
});

router.delete('/:id', (req, res) => {
  Events.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) {
      console.log(err);
    }
    res.json(post);
  });
});

module.exports = router;