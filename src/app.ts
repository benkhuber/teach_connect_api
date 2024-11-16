import express from 'express';
import { Request, Response } from 'express';
import { PORT } from './config'
import db from './config/database';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    try {
        const allJobsInDb = await db.query('SELECT * FROM jobs');
        
        console.log(allJobsInDb.rows)
    } catch (error) {
        console.error('Error fetching all job postings:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
