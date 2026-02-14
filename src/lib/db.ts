import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'neondb_owner',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'neondb',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
