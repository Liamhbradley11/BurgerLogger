// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 8080,
  user: "cf4pt95mct5ikjbd	",
  password: "h5mc003a4lr7d29t",
  database: "k3pzom8f0snocuhc"
});

}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
