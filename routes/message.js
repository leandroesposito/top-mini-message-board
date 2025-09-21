const { Router } = require("express");
const messageController = require("../controllers/message");

const messageRouter = Router();

messageRouter.get("/:id", messageController.messageGet);

module.exports = messageRouter;
