import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "dracula-game",
  password: process.env.DB_PASS || "",
});

connection.connect();
console.log("Connected to MySQL");

export default connection;
