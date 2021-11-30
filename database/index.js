const mysql = require('mysql');

const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

dbconnection.connect((err) => {
  if (err) {
    console.log(err, err.message);
  } else {
    console.log("🎉 You're Connected!");
  }
});

module.export = dbconnection;
