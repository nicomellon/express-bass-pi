import express, { Router } from 'express';

export const bassesRouter: Router = express.Router();

bassesRouter.route('/').get((req: express.Request, res: express.Response) => {
  res.send('These are the basses routes');
});
