const express = require("express");
const router = express.Router();
const contactUsController = require("../controllers/contactUsController");

router.post("/api/contactus", contactUsController.handleContactForm);

module.exports = router;