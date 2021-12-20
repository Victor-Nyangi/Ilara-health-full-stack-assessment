// 'user strict';

const Pool = require('pg').Pool

//local postgresql db connection
const dbConn = new Pool({
  user: "postgres",
  host: "",
  database: "Todolist",
  password: "",
  port: 5432,
})

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Successful connection to the database!");
});

module.exports = dbConn;