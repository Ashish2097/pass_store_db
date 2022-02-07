import * as mysql from "mysql2";
import config from "./config";

// create the connection to database
const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
    console.log("Not connected", err);
    return;
  } else {
    console.log("Connected");
  }
});

// const sql = "CREATE DATABASE pass-store";
// connection.query(sql, (err, result) => {
//   if (err) throw err;
//   else console.log(result);
// });
