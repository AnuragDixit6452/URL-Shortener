const USER = require("../models/user");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "User name|email|password is missing! Please try again" });
  }
  await USER.create({
    name,
    email,
    password,
  });
  res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "User name|email|password is missing! Please try again" });
  }
  const entry = await USER.findOne({
    email,
    password,
  });
  if (!entry)
    return res.render("login", { error: "Invalid userName or password" });
  res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
