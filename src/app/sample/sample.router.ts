import { Router, Request, Response } from 'express';

// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'GET request from sample router',
  });
});

router.post('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'POST request from sample router',
  });
});

router.put('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'PUT request from sample router',
  });
});

router.delete('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'DELETE request from sample router',
  });
});
