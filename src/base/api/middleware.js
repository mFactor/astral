/**
 * Base middleware
 */
const base = (app) => {
  app.use((req, res, next) => {
    req.__ASTRAL__ = {};
    const logEntry = {
      timestamp: null,
      route: null,
      server: [],
      client: [],
    };
    req.__ASTRAL__.log = logEntry;
    next();
  });
};

export default base;
