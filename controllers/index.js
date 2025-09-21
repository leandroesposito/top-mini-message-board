const db = require("../db/queries");

async function indexGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
}

module.exports = {
  indexGet,
};
