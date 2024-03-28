const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "url is required" });
  const generatedUrl = shortid();

  await URL.create({
    shortUrl: generatedUrl,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: generatedUrl });
}

async function handleGetAnalytics(req, res) {
  const shortUrl = req.params.shortId;
  console.log(typeof shortId);
  const entry = await URL.findOne({ shortUrl });
  res.json({
    totalClicks: entry.visitHistory.length,
    entry: entry.visitHistory,
  });
}

async function handleRedirectToUrl(req, res) {
  const shortUrl = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortUrl,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

module.exports = {
  handleGenerateShortURL,
  handleRedirectToUrl,
  handleGetAnalytics,
};
