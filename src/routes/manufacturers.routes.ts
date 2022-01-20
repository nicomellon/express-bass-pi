import express, { Router } from 'express';
import { db } from '../db';

export const manufacturersRouter: Router = express.Router();

/* handler functions */

const getManufacturerByID = (req: express.Request, res: express.Response) => {
  const manufacturerID = req.params.id;
  const query: string = `SELECT * FROM manufacturers WHERE id = ${manufacturerID}`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const getAllManufacturers = (req: express.Request, res: express.Response) => {
  const query: string = 'SELECT * FROM manufacturers';
  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const postManufacturers = (req: express.Request, res: express.Response) => {
  const { name, foundedYear, nationality, logo } = req.body;

  const query: string = `INSERT INTO manufacturers (name, founded_year, nationality, logo) 
    VALUES ('${name}', ${foundedYear}, '${nationality}', ${logo});`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(201).json(results);
  });
};

/* router */
manufacturersRouter
  .route('/:id') // -> /api/manufacturers/:id
  .get(getManufacturerByID);

manufacturersRouter
  .route('/') // -> /api/manufacturers
  .get(getAllManufacturers)
  .post(postManufacturers);
