import express, { Router, Request, Response, NextFunction } from 'express';
import { db } from '../db';

const bassesRouter: Router = express.Router();

/* TypeScript interfaces */
interface Bass {
  id?: number;
  manufacturerID: number;
  name: string;
  launchYear: number;
  image: string | null;
}

/* handler functions */
async function getBassByID(req: Request, res: Response, next: NextFunction) {
  try {
    const bassID = req.params.id;
    const [rows, fields] = await db.execute(
      `SELECT * FROM basses WHERE id = ${bassID};`
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function updateBassByID(req: Request, res: Response, next: NextFunction) {
  try {
    const updated: Bass = {
      id: Number(req.params.id),
      manufacturerID: req.body.manufacturerID,
      name: req.body.name,
      launchYear: req.body.launchYear,
      image: req.body.image,
    };

    const [rows, fields] = await db.execute(`
      UPDATE basses
         SET manufacturer_id = '${updated.manufacturerID}', name = '${updated.name}', launch_year = ${updated.launchYear}, image = '${updated.image}'
       WHERE id = ${updated.id};
    `);

    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function deleteBassByID(req: Request, res: Response, next: NextFunction) {
  try {
    const bassID = req.params.id;
    const [rows, fields] = await db.execute(
      `DELETE FROM basses WHERE id = ${bassID}`
    );
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function getRandomBass(req: Request, res: Response, next: NextFunction) {
  try {
    const [rows, fields] = await db.execute(`
    SELECT * FROM basses
     ORDER BY RAND()
     LIMIT 1;`);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function getAllBasses(req: Request, res: Response, next: NextFunction) {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM basses;');
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
}

async function postBasses(req: Request, res: Response, next: NextFunction) {
  try {
    const newBass: Bass = {
      manufacturerID: req.body.manufacturerID,
      name: req.body.name,
      launchYear: req.body.launchYear,
      image: req.body.image,
    };

    const [rows, fields] = await db.execute(`
      INSERT INTO basses (manufacturer_id, name, launch_year, image) 
      VALUES (${newBass.manufacturerID}, '${newBass.name}', ${newBass.launchYear}, ${newBass.image});
    `);
    res.status(201).json(rows);
  } catch (error) {
    next(error);
  }
}

/* router */
bassesRouter
  .route('/random') // -> /api/basses/random
  .get(getRandomBass);

bassesRouter
  .route('/:id') // -> /api/basses/:id
  .get(getBassByID)
  .put(updateBassByID)
  .delete(deleteBassByID);

bassesRouter
  .route('/') // -> /api/basses
  .get(getAllBasses)
  .post(postBasses);

export { bassesRouter };
