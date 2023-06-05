import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20173",
  database: "test01",
});

export default connection;
