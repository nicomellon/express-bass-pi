import express, { Router } from 'express';
import { db } from '../db';

export const bassesRouter: Router = express.Router();

const getAllBasses = (req: express.Request, res: express.Response) => {
  const query: string = 'SELECT * FROM basses';
  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.json(results);
  });
};

const postBasses = (req: express.Request, res: express.Response) => {
  const { manufacturerId, name, launchYear, image } = req.body;

  const query: string =
    'INSERT INTO basses (manufacturer_id, name, launch_year, image) VALUES (?, ?, ?, ?);';
  const inserts = [manufacturerId, name, launchYear, image];

  db.query(query, inserts, (error, results, fields) => {
    if (error) console.error(error);
    res.json(results);
  });
};

bassesRouter
  .route('/') // -> /api/basses
  .get(getAllBasses)
  .post(postBasses);
