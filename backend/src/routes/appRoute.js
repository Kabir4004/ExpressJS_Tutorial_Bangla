import { Router } from 'express';

export const appRoutes = Router();

appRoutes.get('/', (_, res) => {
  res.send('Welcome to the API');
  console.log('API endpoint / was accessed');
});