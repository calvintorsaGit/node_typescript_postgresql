const Pool = require('pg').Pool;

export const dbPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'user',
    password: '1234',
    port: 5432,
});
