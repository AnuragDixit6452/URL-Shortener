const { getUser } = require("../service/auth");

async function isAuthorizedUser(req, res, next) {
  const uid = req.cookie.uid;
  if (!uid) res.redirect("/login");

  const user = getUser(uid);
  if (!user) res.redirect("/login");
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const uid = req.cookie.uid;
  const user = getUser(uid);
  req.user = user;
  next();
}

module.exports = {
  isAuthorizedUser,
  checkAuth,
};
