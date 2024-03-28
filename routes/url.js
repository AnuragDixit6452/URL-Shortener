const express = require("express");
const router = express.Router();
const {
  handleGenerateShortURL,
  handleRedirectToUrl,
  handleGetAnalytics,
} = require("../controllers/url");

router.get("/:shortId", handleRedirectToUrl);
router.post("/", handleGenerateShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
