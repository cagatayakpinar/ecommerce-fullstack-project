import express from 'express';
import PostgresClient from '../config/db.js';
const router = express.Router();
import logger from '../controller/logger.js'

// Kullanıcı Oluşturma.
router.post('/signup', async (req, res) => {
    try {
        const text = "INSERT INTO users (email, password, fullname) VALUES ($1, crypt($2, gen_salt('bf')), $3) RETURNING *"
        const values = [req.body.email, req.body.password, req.body.fullname]
        const { rows } = await PostgresClient.query(text, values)
        return res.status(201).json({ createdUser: rows[0] })
    } catch (error) {
        console.log(`Error occured`, error.message)
        return res.status(400).json({ message: error.message})
    }
})

//Login(Authentication) İşlemleri.

router.post('/login', async (req, res) => {
    try {
        const text = "SELECT * FROM  users WHERE email = $1 AND password = crypt($2, password)"

        const values = [req.body.email, req.body.password]

        const { rows } = await PostgresClient.query(text, values)

        if(!rows.length)
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.'})
        return res.status(200).json({ message: 'Login işlemi başarılı.'})
    } catch (error) {

        console.log('Error Occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})

// Kullanıcıları listelemek.

router.get('/getUsers', async (req, res) => {
    try {

        const text = "SELECT * FROM users ORDER BY id ASC"
        const { rows } = await PostgresClient.query(text)
        logger.userLogger.log('info', 'Succesfully got list of users. ')
        return res.status(200).json(rows)
        

    } catch (error) { 
        console.log('Error Occured', error.message)
        logger.userLogger.log('info', 'Error finding users. ')
        return res.status(400).json({ message: error.message })
    }
})
export default router;



