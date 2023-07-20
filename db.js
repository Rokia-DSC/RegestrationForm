import { Pool } from 'pg'

const pool = new Pool({
    user : 'postgres',
    password : 'RDTMGP1',
    host : 'localhost',
    port : '5432',
    database : 'formdb'
})


// let localPoolConfig   = {
    
// };

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized : false}} : localConfig;

// const pool = new Pool(localPoolConfig);
// export default pool;

