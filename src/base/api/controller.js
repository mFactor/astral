import { Router } from 'express';

const base = (app) => {
  const router = Router();

  router.post('/log', (req, res) => {
    console.log('SHIT');
    req.__ASTRAL__.log.client.push('Test log');
    res.sendStatus(200);
  });

  app.use('/base/api', router);
};

export default base;
