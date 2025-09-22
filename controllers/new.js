const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const validators = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("username must be at least 1 character and at most 255"),
  body("text")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("text must be at least 1 character and at most 255"),
];

async function newGet(req, res) {
  res.render("new", { title: "New Message" });
}

async function newPost(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .render("new", { title: "New Message", errors: errors.array() });
  }

  const { username, text } = req.body;
  await db.postMessage(username, text);
  res.redirect("/");
}

module.exports = {
  newGet,
  newPost: [validators, newPost],
};
