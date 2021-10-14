var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ratings_reviews'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected')
  }
})
module.exports = connection;


// this is not connected by default
 // the connection is not actually done untill my query is requested
 // pooling instead keeps the connections open and degates to open routes for the request

