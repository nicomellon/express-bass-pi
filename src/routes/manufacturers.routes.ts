import express, { Router } from 'express';
import { db } from '../db';

export const manufacturersRouter: Router = express.Router();

/* handler functions */

const getAllManufacturers = (req: express.Request, res: express.Response) => {
  const query: string = 'SELECT * FROM manufacturers';
  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const getManufacturerByID = (req: express.Request, res: express.Response) => {
  const manufacturerID = req.params.id;
  const query: string = `SELECT * FROM manufacturers WHERE id = ${manufacturerID}`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

/* router */
manufacturersRouter
  .route('/:id') // -> /api/manufacturers/:id
  .get(getManufacturerByID);

manufacturersRouter
  .route('/') // -> /api/manufacturers
  .get(getAllManufacturers);
