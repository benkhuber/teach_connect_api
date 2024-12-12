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
        const email = [data.email];

        const query = 'SELECT * FROM users WHERE email = $1'

        const emailAlreadyExists = await db.pool.query(query, email)

        console.log(emailAlreadyExists);

    } catch (error) {
        console.error('Error signing up')
    }
})

export default router;