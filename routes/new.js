const { Router } = require("express");
const newController = require("../controllers/new");
const newRouter = Router();

newRouter.get("/", newController.newGet);

newRouter.post("/", newController.newPost);

module.exports = newRouter;
