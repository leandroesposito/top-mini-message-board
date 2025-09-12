const { Router } = require("express");
const messages = require("../messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = indexRouter;
