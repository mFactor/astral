/**
 * Astral Logger
 * Each can be imported globally through ES6 standard
 */
import winston from 'winston';
import fs from 'fs';
import path from 'path';

const custom = {
  levels: {
    trace: 0,
    input: 1,
    verbose: 2,
    prompt: 3,
    debug: 4,
    info: 5,
    data: 6,
    help: 7,
    warn: 8,
    error: 9,
  },
  colors: {
    trace: 'magenta',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    debug: 'blue',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    error: 'red',
  },
  consoleOpts: {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
  },
  fileOpts: {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
  },
};

// Log stuff
let transport;
let opts;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  transport = winston.transports.Console;
  opts = custom.consoleOpts;
}

/* TODO: Needs fix to play nice with PM2

else if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  // File-based logging in staging and production
  const filename = path.join(__dirname, `mAutomation-${process.env.NODE_ENV}.log`);
  try {
    fs.unlinkSync(filename);
    console.log('Removing old log files');
  } catch (err) {
    console.log('Creating new log files');
  }
  transport = winston.transports.File;
  opts = custom.fileOpts;
  opts.filename = filename;
} else {
  // Kill app if not definied
  const e = 'NODE_ENV is not defined. Please define to support logs.';
  throw e;
}
*/

// Node JS system log
const sysLog = new winston.Logger({
  level: 'error',
  levels: custom.levels,
  transports: [
    new (transport)(opts),
  ],
});

// Database logs
const dbLog = new winston.Logger({
  level: 'error',
  levels: custom.levels,
  transports: [
    new (transport)(opts),
  ],
});

// Color to logs
winston.addColors(custom.colors);

export { sysLog, dbLog };
