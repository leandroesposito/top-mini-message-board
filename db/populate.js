require("dotenv").config();
const { Client } = require("pg");

const connecionString = `postresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?${process.env.PGPARAMS}`;

const SQL_CREATE = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP
);
`;

const SQL_POPULATE = `
INSERT INTO messages (text, username, added)
VALUES
  ('Hi there!', 'Amando', $1),
  ('Hello World!', 'Charles', $2);
`;

async function main() {
  console.log("Connecting to server...");
  const client = new Client(connecionString);
  await client.connect();
  console.log("Sending data...");
  await client.query(SQL_CREATE);
  await client.query(SQL_POPULATE, [
    new Date().toISOString(),
    new Date().toISOString(),
  ]);
  await client.end();
  console.log("Done!");
}

main();
