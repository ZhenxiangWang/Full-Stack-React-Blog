const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "wzx63897713",
  post: 5432,
});

module.exports = pool;
