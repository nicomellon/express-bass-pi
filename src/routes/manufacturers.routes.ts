import express, { Router } from 'express';
import { db } from '../db';

export const manufacturersRouter: Router = express.Router();

manufacturersRouter
  .route('/')
  .get((req: express.Request, res: express.Response) => {
    db.query('SELECT * FROM manufacturers', (error, results, fields) => {
      if (error) {
        console.error(error);
      }
      res.json(results);
    });
  });
