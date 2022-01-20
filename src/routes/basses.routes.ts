import express, { Router, Request, Response } from 'express';
import { db } from '../db';

export const bassesRouter: Router = express.Router();

/* handler functions */
const getAllBasses = (req: Request, res: Response) => {
  const query: string = 'SELECT * FROM basses';

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const postBasses = (req: Request, res: Response) => {
  const { manufacturerId, name, launchYear, image } = req.body;

  const query: string = `INSERT INTO basses (manufacturer_id, name, launch_year, image) 
    VALUES (${manufacturerId}, '${name}', ${launchYear}, ${image});`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(201).json(results);
  });
};

/* router */
bassesRouter
  .route('/') // -> /api/basses
  .get(getAllBasses)
  .post(postBasses);
