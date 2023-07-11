import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PDW,
  database: "ALG_PRE",
  port: 3306,
});

export default connection;
