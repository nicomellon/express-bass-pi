import express, { Router, Request, Response } from 'express';
import { db } from '../db';

export const manufacturersRouter: Router = express.Router();

/* handler functions */
const getBassesFromManufacturer = (req: Request, res: Response) => {
  const manufacturerID = req.params.id;
  const query: string = `SELECT * FROM basses WHERE manufacturer_id = ${manufacturerID}`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const getManufacturerByID = (req: Request, res: Response) => {
  const manufacturerID = req.params.id;
  const query: string = `SELECT * FROM manufacturers WHERE id = ${manufacturerID}`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const deleteManufacturerByID = (req: Request, res: Response) => {
  const manufacturerID = req.params.id;
  const query: string = `DELETE FROM manufacturers WHERE id = ${manufacturerID}`;

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const getAllManufacturers = (req: Request, res: Response) => {
  const query: string = 'SELECT * FROM manufacturers';

  db.query(query, (error, results, fields) => {
    if (error) console.error(error);
    res.status(200).json(results);
  });
};

const postManufacturers = (req: Request, res: Response) => {
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
  .route('/:id/basses') // -> /api/manufacturers/:id/basses
  .get(getBassesFromManufacturer);

manufacturersRouter
  .route('/:id') // -> /api/manufacturers/:id
  .get(getManufacturerByID)
  // TODO .put(updateManufacturerByID)
  .delete(deleteManufacturerByID);

manufacturersRouter
  .route('/') // -> /api/manufacturers
  .get(getAllManufacturers)
  .post(postManufacturers);
