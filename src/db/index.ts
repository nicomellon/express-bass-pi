import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'database-1.chdxg6xj6r67.eu-central-1.rds.amazonaws.com',
  user: 'admin',
  password: '12341234',
  database: 'bass_pi',
  ssl: 'Amazon RDS',
});

db.connect((err) => {
  if (err) {
    console.error('error connecting to database: ' + err.stack);
    return;
  }

  console.log('Succesfully connected to the database');
});
