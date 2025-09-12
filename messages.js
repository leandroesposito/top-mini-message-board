const { randomUUID } = require("node:crypto");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: randomUUID(),
  },
];

module.exports = messages;
