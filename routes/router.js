const express = require("express");
const router = express.Router();
const apiService = require('../services/service')


router.post("/sendMail", apiService.sendResumeToMail);













module.exports = router;