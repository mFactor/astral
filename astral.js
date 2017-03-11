const childProcess = require('child_process');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const server = require('./webpack.server.js');
const client = require('./webpack.config.js');

const DEV_PORT = 3001;
process.env.NODE_ENV = 'development';

/**
 * Main
 * TODO: Set up for production
 */
(() => {
  if (process.env.NODE_ENV === 'development') {
    watchServer(server);
    watchClient(client);
  }
})();

/**
 * Astral server manager
 */
function watchServer(server) {
  let initServer;
  let initialLoad = true;
  const compiler = webpack(server);
  const bundlePath = (server.output.path + '/' + server.output.filename);

  // Server-side webpack handling
  const watching = compiler.watch({
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => {
    if (err) {
      // console.log('Server bundling error has occured');
      throw new Error('Server bundling error has occured');
    }
    // clear bundle imports
    clearImportCache(bundlePath);

    if (!initialLoad) {
      initServer.httpServer.close(() => {
        initServer = httpInit(bundlePath);
        if (initServer) {
          initialLoad = false;
          console.log(`Server bundled & restarted ${new Date()}`);
        } else {
          // server bundling error has occurred
          initialLoad = true;
        }
      });

      // Destroy all open sockets
      for (const socket of initServer.sockets.values()) {
        socket.destroy();
      }
    } else {
      initServer = httpInit(bundlePath);

      if (initServer) {
        initialLoad = false;
        console.log('Server bundled successfully');
      } else {
        // server bundling error has occurred
        initialLoad = true;
      }
    }
  });
}

/**
 * Astral client manager
 */
function watchClient(client) {
  const compiler = webpack(client);
  const basePath = client.output.publicPath;
  const opts = {
    hot: true,
    inline: true,
    lazy: false,
    // contentBase: basePath,
    publicPath: basePath,
    stats: {
      colors: true,
    },
  };
  // let config = require(bundlePath).config;
  const devServer = new WebpackDevServer(compiler, opts);
  devServer.listen(DEV_PORT, 'localhost', console.log('Dev server listening on ' + DEV_PORT));
}

/**
 * Express HTTP server manager
 */
function httpInit(bundlePath) {
  let httpServer;
  const sockets = new Map();
  let nextSocket = 0;
  try {
    // import http server
    httpServer = require(bundlePath).httpServer;

    // Shutdown httpServer
    httpServer.on('connection', (socket) => {
      const socketId = nextSocket++;
      sockets.set(socketId, socket);
      socket.on('close', () => {
        sockets.delete(socketId);
      });
    });
  } catch (e) {
    console.log(e);
    return null;
  }
  return { httpServer, sockets };
};

function clearImportCache(bundlePath) {
  const cacheIds = Object.keys(require.cache);
  for (const id of cacheIds) {
    if (id === bundlePath) {
      delete require.cache[id];
      return;
    }
  }
};

/*
child.stdout.on('data', function (data) {
    console.log('We received a reply: ' + data);
});


child.stderr.on('data', function (data) {
    console.log('There was an error: ' + data);
});
*/
