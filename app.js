require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server listening on port:", PORT);
});
