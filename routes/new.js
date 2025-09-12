const { Router } = require("express");
const messages = require("../messages");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new");
});

newRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = newRouter;
