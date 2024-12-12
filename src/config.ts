import * as dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV
const DATABASE_URL = process.env.DATABASE_URL
const FRONTEND_URL = process.env.FRONTEND_URL

export { PORT, NODE_ENV, DATABASE_URL, FRONTEND_URL }