import { Log } from 'lib/log';

/**
 * Base middleware
 */
const base = (app) => {
  app.use((req, res, next) => {
    req.__ASTRAL__ = {
      log: new Log(req),
    };
    next();
  });
};

export default base;
