import express from 'express';
import { Request, Response } from 'express';
import { PORT } from './config'
import db from './config/database';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
