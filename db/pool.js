const { Pool } = require("pg");

const connectionString = `postresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?${process.env.PGPARAMS}`;

module.exports = new Pool({ connectionString });
