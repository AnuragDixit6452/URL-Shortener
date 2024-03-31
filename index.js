const express = require("express");
const urlRouter = require("./routes/url");
const connectMongoDb = require("./connection");
const staticRouter = require("./routes/staticRoute");
const userRouter = require("./routes/user");
const path = require("path");
const cookieParser = require("cookie-parser");
const { isAuthorizedUser, checkAuth } = require("./middlewares/auth");

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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use("/", checkAuth, staticRouter);
app.use("/api/url", isAuthorizedUser, urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
