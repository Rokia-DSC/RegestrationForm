// import { Pool } from 'pg'

// const pool = new Pool({
//     user : 'postgres',
//     password : 'RDTMGP1',
//     host : 'localhost',
//     port : '5432',
//     database : 'formdb'
// });
import { Client } from "pg";

const client = new Client({
    user: 'postgres',
    host : 'localhost',
    database: 'formdb',
    password : 'RDTMGP1',
    port: 5432,
})

const connectionString = 'postgresql://postgres:RDTMGP1@localhost:5432/formdb'

export default client ;










// // const { Client } = require('pg')
// const connectionString = 'postgresql://postgres:RDTMGP1@localhost:5432/formdb' ;
// // const client = new Client({
// //     connectionString,
// //   }) ;

//  client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// export default client  ;


// const client = new Client({
//   user: 'postgres',
//   host : 'localhost',
//   database: 'formdb',
//   password : 'RDTMGP1',
//   port: 5432,
// })
//-------------------------------------

// import { Pool } from 'pg'



// // let localPoolConfig   = {
    
// // };

// const poolConfig = process.env.DATABASE_URL ? {
//     connectionString: process.env.DATABASE_URL,
//     ssl:{rejectUnauthorized : false}} : localConfig;

// // const pool = new Pool(localPoolConfig);
// // export default pool;

