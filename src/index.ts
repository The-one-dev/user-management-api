import express, { Request, Response } from 'express';
import { env } from './config/env';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('User Management API is running 🚀');
});

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
