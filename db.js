const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host : 'localhost',
  database: 'formdb',
  password : 'RDTMGP1',
  port: 5432,
})

client.connect(function(err) {
  if (err) {
    console.log("Error Happend in DB Connection.") ;
     throw err
    } ;
  console.log("Connected!");
});

module.exports = client ;
