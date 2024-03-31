const URL = require("../models/url");

async function handleGetAllShortUrls(req, res) {
  if (!req.user) res.redirect("/login");

  const allUrls = await URL.find({ createdBy: req.user?._id });
  res.render("home", {
    url: allUrls,
  });
}

async function handleUserSignUp(req, res) {
  res.render("signup");
}

async function handleUserLoginPage(req, res) {
  res.render("login");
}

module.exports = {
  handleGetAllShortUrls,
  handleUserSignUp,
  handleUserLoginPage,
};
