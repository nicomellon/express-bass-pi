import mysql from 'mysql2/promise';

console.log('Creating connection pool...');
export const db = mysql.createPool({
  host: 'database-1.chdxg6xj6r67.eu-central-1.rds.amazonaws.com',
  user: 'admin',
  password: '12341234',
  database: 'bass_pi',
  ssl: 'Amazon RDS',
});
