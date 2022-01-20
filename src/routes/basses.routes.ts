import express, { Router } from 'express';
import { db } from '../db';

export const bassesRouter: Router = express.Router();

bassesRouter.route('/').get((req: express.Request, res: express.Response) => {
  db.query('SELECT * FROM basses', (error, results, fields) => {
    if (error) {
      console.error(error);
    }
    res.json(results);
  });
});
