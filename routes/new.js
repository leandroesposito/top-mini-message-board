const { Router } = require("express");
const messages = require("../messages");
const { randomUUID } = require("node:crypto");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({
    user,
    text,
    added: new Date(),
    id: randomUUID(),
  });
  res.redirect("/");
});

module.exports = newRouter;
