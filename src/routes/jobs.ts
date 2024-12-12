import { Router } from 'express';
import { Request, Response } from 'express';
import db from '../config/database';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const allJobsInDb = await db.query('SELECT * FROM jobs');
        
        if (allJobsInDb != undefined) {
            console.log(allJobsInDb.rows)
            res.send('all jobs sent')
        } else {
            res.send('no jobs found')
        }
    } catch (error) {
        console.error('Error fetching all job postings:', error);
    }
});

export default router;