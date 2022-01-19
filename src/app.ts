import express, { Express, Router } from 'express';
import morgan from 'morgan';
import { bassesRouter } from './routes';

const app: Express = express();
const router: Router = express.Router();

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.set('json spaces', 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

/************************************************************************************
 *                               Register all routes
 ***********************************************************************************/

app.use('/basses', bassesRouter);

/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res.status(500).json({
      errorName: err.name,
      message: err.message,
      stack: err.stack || 'no stack defined',
    });
  }
);

export default app;
