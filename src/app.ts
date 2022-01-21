import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { bassesRouter, manufacturersRouter } from './routes';

const app = express();

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

app.use('/api/basses', bassesRouter);
app.use('/api/manufacturers', manufacturersRouter);

/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack || 'no stack defined',
  });
});

export default app;
