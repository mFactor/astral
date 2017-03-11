/**
 * Application configuration, matches to NODE_ENV passed
 * through starting the application
 */
const config = {
  name: 'Astral Demo',
  development: {
    host: 'localhost',
    port: '3000',
    devPort: '3001',
  },
  staging: {
    host: 'localhost',
    port: '3002',
    devPort: null,
  },
  production: {
    host: 'localhost',
    port: '80',
    devPort: null,
  }
};

export { config };
