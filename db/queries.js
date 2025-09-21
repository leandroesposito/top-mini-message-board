require("dotenv").config();
const pool = require("./pool");
const backupMessages = require("../messages");
const { randomUUID } = require("node:crypto");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error(error);
    console.error("USING PLAIN JAVASCRIPT OBJECT INSTEAD OF DATABASE");
    return backupMessages;
  }
}

async function getMessage(id) {
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    return rows[0];
  } catch (error) {
    console.error(error);
    console.error("USING PLAIN JAVASCRIPT OBJECT INSTEAD OF DATABASE");
    return backupMessages.find((message) => message.id === id);
  }
}

async function postMessage(username, text) {
  try {
    await pool.query(
      "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
      [username, text, new Date().toISOString()]
    );
  } catch (error) {
    console.error(error);
    console.log("USING PLAIN JAVASCRIPT OBJECT INSTEAD OF DATABASE");
    backupMessages.push({
      text,
      username,
      added: new Date(),
      id: randomUUID(),
    });
  }
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
