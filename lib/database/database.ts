import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20173",
  database: "test01",
  port: 3306,
});

export default connection;
