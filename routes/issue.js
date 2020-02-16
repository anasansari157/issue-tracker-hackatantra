var express = require('express');
var router = express.Router();
var Issue = require("../models/issue");
var issueController = require('../controllers/issueController');




//Show Issues
router.get('/', issueController.issuesDisplay);

//Create an Issue
router.post("/create", issueController.createIssue);

// Review an issue
router.put("/review", issueController.reviewIssue);

  
module.exports = router;