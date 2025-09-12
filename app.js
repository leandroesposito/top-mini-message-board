require("dotenv").config();
const express = require("express");
const path = require("node:path");
const messages = require("./messages");
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded());

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server listening on port:", PORT);
});
