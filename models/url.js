const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      unique: true,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timeStamp: {
          type: Number,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
