const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host : 'localhost',
    database: 'formdb',
    password : 'RDTMGP1',
    port: 5432,
})

Client.connect();
client.query('Select * from users', (err, res)=> {
  if(!err){
    console.log(res.rows);
  }
  else{
    console.log(err.message);
  }
  client.end;
}
);

module.exports = client ;
