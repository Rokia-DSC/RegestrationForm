import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/')

router.get('/',async (req,res) => {
    try{
        const users = await pool.query('Select * from users');
        res.json({users : users.rows});
        res.render('public/index');
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

export default router;