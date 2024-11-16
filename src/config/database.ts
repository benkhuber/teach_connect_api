import { Pool, QueryArrayConfig } from 'pg';

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

    async connect() {
        return this.pool.connect();
    }

    async query(queryText: string) {
        const client = await this.connect();

        try {
            const res = await client.query(queryText);
            return res;
        } catch (err) {
            console.error('Error querying DB: ', err);
        } finally {
            client.release();
        }
    }
}

const db = new Database();

export default db;