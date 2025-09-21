const db = require("../db/queries");

async function newGet(req, res) {
  res.render("new", { title: "New Message" });
}

async function newPost(req, res) {
  const { username, text } = req.body;
  await db.postMessage(username, text);
  res.redirect("/");
}

module.exports = {
  newGet,
  newPost,
};
