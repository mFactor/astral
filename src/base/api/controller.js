import { Router } from 'express';

const base = (app) => {
  const router = Router();

  router.post('/client-log', (req, res) => {
    req.__ASTRAL__.log.client.push('Test log');
    res.status(400);
  });

  app.use('/base/api', router);
};

export default base;
