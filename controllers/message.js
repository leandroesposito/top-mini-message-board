const db = require("../db/queries");

async function messageGet(req, res) {
  const { id } = req.params;
  const message = await db.getMessage(id);
  res.render("message", { title: "Message Details", message });
}

module.exports = {
  messageGet,
};
