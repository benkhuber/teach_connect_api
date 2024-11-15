import { Pool } from 'pg';

import { NODE_ENV, DATABASE_URL } from '../config';

class Database{
    pool: Pool;

    constructor() {
        const isProduction = NODE_ENV === 'prod'

        this.pool = new Pool({
            connectionString: DATABASE_URL,
            ssl: isProduction ? { rejectUnauthorized: false } : false,
          });
    }
}

const db = new Database();

export default db;