/**
 * Application configuration, matches to NODE_ENV passed
 * through starting the application
 *
 * Each key becomes part of the env to be used throughout the application
 * The webpack development port is set at 3001, see astral.js for more info
 */
const config = {
  name: 'Astral Demo',
  namespace: '__ASTRAL__',
  development: {
    host: 'localhost',
    port: '3000',
  },
  staging: {
    host: 'localhost',
    port: '3002',
  },
  production: {
    host: 'localhost',
    port: '8089',
  },
  setProcKeys() {
    const env = process.env.NODE_ENV;
    Object.keys(this[env]).forEach((param) => {
      process.env[param.toUpperCase()] = (this[env][param]);
    });
    process.env.NAMESPACE = this.namespace;
    return process.env;
  },
};

export default config;
