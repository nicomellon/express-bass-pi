import express, {
  Router,
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express';
import { db } from '../db';

const manufacturersRouter: Router = express.Router();

/* handler functions */
async function getBassesFromManufacturer(req: Req, res: Res, next: Next) {
  try {
    const manufacturerID = req.params.id;
    const [rows, fields] = await db.execute(
      `SELECT * FROM basses WHERE manufacturer_id = ${manufacturerID};`
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function getManufacturerByID(req: Req, res: Res, next: Next) {
  try {
    const manufacturerID = req.params.id;
    const [rows, fields] = await db.execute(
      `SELECT * FROM manufacturers WHERE id = ${manufacturerID};`
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function updateManufacturerByID(req: Req, res: Res, next: Next) {
  try {
    const manufacturerID = req.params.id;
    const { name, foundedYear, nationality, logo } = req.body;

    const [rows, fields] = await db.execute(`
    UPDATE manufacturers
       SET name = '${name}', founded_year = ${foundedYear}, nationality = ${nationality}, logo = '${logo}'
     WHERE id = ${manufacturerID};
  `);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function deleteManufacturerByID(req: Req, res: Res, next: Next) {
  try {
    const manufacturerID = req.params.id;
    const [rows, fields] = await db.execute(
      `DELETE FROM manufacturers WHERE id = ${manufacturerID};`
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function getAllManufacturers(req: Req, res: Res, next: Next) {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM manufacturers;');
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function postManufacturers(req: Req, res: Res, next: Next) {
  try {
    const { name, foundedYear, nationality, logo } = req.body;

    const [rows, fields] = await db.execute(`
      INSERT INTO manufacturers (name, founded_year, nationality, logo) 
      VALUES ('${name}', ${foundedYear}, '${nationality}', ${logo});
    `);

    res.status(201).json(rows);
  } catch (error) {
    next(error);
  }
}

/* router */
manufacturersRouter
  .route('/:id/basses') // -> /api/manufacturers/:id/basses
  .get(getBassesFromManufacturer);

manufacturersRouter
  .route('/:id') // -> /api/manufacturers/:id
  .get(getManufacturerByID)
  .put(updateManufacturerByID)
  .delete(deleteManufacturerByID);

manufacturersRouter
  .route('/') // -> /api/manufacturers
  .get(getAllManufacturers)
  .post(postManufacturers);

export { manufacturersRouter };
