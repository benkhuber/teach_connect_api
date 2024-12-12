import express from 'express';
import { PORT, FRONTEND_URL } from './config'
import indexRoutes from './routes/index';
import jobsRoutes from './routes/jobs';
import usersRoutes from './routes/users';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

app.use('/', indexRoutes);
app.use('/jobs', jobsRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});