import { Router } from 'express';
import { Request, Response } from 'express';
import db from '../config/database';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log('users route')
    } catch (error) {
        console.error('Error fetching all job postings:', error);
    }
});

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const query = 'SELECT * FROM users WHERE email = $1'
        const emailInDbCheck = await db.query(query, [data.email])
        const emailExistsinDb = emailInDbCheck.length > 0;

        if (emailExistsinDb) {
            console.log('email already exists in db');
        } else {
            const insertQuery = 'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)'
            const values = [
                data.firstname,
                data.lastname,
                data.email,
                data.password
            ]
            db.query(insertQuery, values);
            console.log('email does not exist, added to db');
        }

    } catch (error) {
        console.error('Error signing up')
    }
})

export default router;