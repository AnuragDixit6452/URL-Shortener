const express = require("express");
const urlRouter = require("./routes/url");
const connectMongoDb = require("./connection");
const staticRouter = require("./routes/staticRoute");
const path = require("path");

const app = express();
const PORT = 8001;

connectMongoDb("mongodb://localhost:27017/short-url").then(() => {
  console.log("MONGODB CONNECTED");
});

//ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//parser
app.use(express.json());

//routes
app.use("/home", staticRouter);
app.use("/api/url", urlRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
