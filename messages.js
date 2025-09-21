const { randomUUID } = require("node:crypto");

const messages = [
  {
    text: "Hi there!",
    username: "Amando",
    added: new Date(),
    id: randomUUID(),
  },
  {
    text: "Hello World!",
    username: "Charles",
    added: new Date(),
    id: randomUUID(),
  },
];

module.exports = messages;
