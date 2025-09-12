const { Router } = require("express");
const messages = require("../messages");

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const message = messages.find((message) => message.id === id);

  res.render("message", { title: "Message Details", message });
});

module.exports = messageRouter;
