import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/users-routes.js';
import path from 'path';
import client from './db.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credential: true, origin : process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/',express.static(path.join(__dirname,'public')));

app.use('/api/users',usersRouter);


client.connect() ;

client.query(`Select * from formdb` , (err , res)=>{
    if (err) throw err ;    
    console.log("CONNECTED!!") ;
    client.emit
}) ;



app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`);
});