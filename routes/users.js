var express = require('express');
var router = express.Router();

/* var startDate = document.getElementById("startDateInput").value;
var startDateEntered = new Date(startDate);
var endDate = document.getElementById("endDateInput").value;
var endDateEntered = new Date(endDate); */
/* GET users listing. */ 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


