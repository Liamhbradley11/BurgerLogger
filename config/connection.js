let mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) 
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else 
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });

connection.connect((err) => {
    if (err) {
        console.error(`error connecting MySQL: ${err.stack} \n`);
        return;
    }
    console.log(`Connected to MySQL as id ${connection.threadId} \n`);
});

module.exports = connection;