import express from 'express';
import { PORT } from './config'
import indexRoutes from './routes/index';
import jobsRoutes from './routes/jobs';

const app = express();

app.use('/', indexRoutes);
app.use('/jobs', jobsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});