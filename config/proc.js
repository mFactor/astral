/**
 * Application configuration, matches to NODE_ENV passed
 * through starting the application
 *
 * Each key becomes part of the env to be used throughout the application
 *
 * ERRATA
 * The webpack development port is set at 3001, for the time being Babel does not
 * currently allow mixing of import/export and module.exports, so, the dynamic
 * webpacking development port (3001) defined in astral.js can't be put in this config
 */
const config = {
  name: 'Astral',
  namespace: '__ASTRAL__',
  development: {
    host: 'localhost',
    port: '3000',
    sessionDb: 8,
  },
  staging: {
    host: 'localhost',
    port: '3002',
    sessionDb: 9,
  },
  production: {
    host: 'localhost',
    port: '8089',
    sessionDb: 10,
  },
  // Sets global process.env keys from config
  setProcKeys() {
    const env = process.env.NODE_ENV;
    Object.keys(this[env]).forEach((param) => {
      process.env[param.toUpperCase()] = (this[env][param]);
    });
    process.env.NAME = this.name;
    process.env.NAMESPACE = this.namespace;
    process.env.BUNDLEPATH = `http://${process.env.HOST}:${process.env.PORT}`;

    // Due to ERRATA issue
    if (env === 'development') {
      process.env.BUNDLEPATH = `http://${process.env.HOST}:3001`;
    }
    return process.env;
  },
};

export default config;
