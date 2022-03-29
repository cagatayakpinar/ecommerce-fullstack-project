import express from 'express';
import PostgresClient from '../config/db.js';

const router = express.Router();


// Get - Verileri listelemek için kullanıyoruz.

router.get('/', async (req, res) => {
    try {
        const text = "SELECT * FROM products"
        const { rows } = await PostgresClient.query(text)
        return res.status(200).json(rows)

    } catch (error) { 
        console.log('Error Occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})
export default router;