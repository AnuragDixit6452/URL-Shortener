const express = require("express");
const router = express.Router();
const {
  handleGetAllShortUrls,
  handleUserSignUp,
  handleUserLoginPage,
} = require("../controllers/staticPages");

router.get("/", handleGetAllShortUrls);
router.get("/signup", handleUserSignUp);
router.get("/login", handleUserLoginPage);

module.exports = router;
