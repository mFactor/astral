module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_lib_log_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_routes_jsx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_reducers_jsx__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_base_components_iso_style_jsx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_middleware__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_controller__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpServer", function() { return httpServer; });
/**
 * Entry point for Node.
 * TODO: Remove hard references in rootTemplate, prep for production
 */














var env = process.env;
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(__dirname, 'static')));

/**
 * Service initialization
 * Note: Use Promise Async/Await pattern to ensure all services
 *       are initialized before proceeding
 */

/**
 * Middleware registration
 */
__WEBPACK_IMPORTED_MODULE_11__src_middleware__["a" /* base */](app);

/**
 * API routing
 */
__WEBPACK_IMPORTED_MODULE_12__src_controller__["a" /* base */](app);

/**
 * Isomorphic react routing
 */
app.use(function (req, res) {
  var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["createMemoryHistory"])(req.path);
  var routerParams = {
    history: history,
    routes: __WEBPACK_IMPORTED_MODULE_8__src_routes_jsx__["a" /* default */],
    location: req.url
  };
  var css = [];
  var storeState = {};
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_9__src_reducers_jsx__["a" /* default */], storeState);

  // React route matching, server side rendering
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["match"])(routerParams, function (err, redirectLocation, renderProps) {
    if (err) {
      __WEBPACK_IMPORTED_MODULE_7__src_lib_log_js__["a" /* sysLog */].error(err);
      if (env.NODE_ENV === 'development') {
        throw new Error('Internal server error');
      }
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found');

    function renderView() {
      var rootView = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["RouterContext"], renderProps, null);
      var rootStyle = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_base_components_iso_style_jsx__["a" /* default */], {
        onInsertCss: function onInsertCss(styles) {
          css.push(styles._getCss());
        }
      }, rootView);
      var rootRedux = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux__["Provider"], { store: store }, rootStyle);
      var rootComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(rootRedux);
      var rootState = JSON.stringify(store.getState());
      var template = '\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset="utf-8">\n          <title>Astral | Demo</title>\n          <script>\n            window.__ROOT_STATE__ = ' + rootState + ';\n          </script>\n          <style>' + css.join('') + '</style>\n        </head>\n        <body>\n          <div id="app-entry">' + rootComponent + '</div>\n          <script src="http://localhost:3001/render.bundle.js"></script>\n        </body>\n      </html>\n      ';
      return template;
    }
    res.send(renderView());
  });
});

var httpServer = app.listen(env.PORT, function () {
  __WEBPACK_IMPORTED_MODULE_7__src_lib_log_js__["a" /* sysLog */].info('Astral server listening on ' + env.PORT);
});



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Application reducers
 */
var appRedux = function appRedux() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = appRedux;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_views_home_jsx__ = __webpack_require__(8);




/**
 * Module router
 */
var moduleRouter = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', name: 'home', component: __WEBPACK_IMPORTED_MODULE_2_app_views_home_jsx__["a" /* default */] });

/* harmony default export */ __webpack_exports__["a"] = moduleRouter;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_less_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_less_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_app_less_home__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





/**
 * Base (or root) component for application
 */
var Home = (_dec = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2_app_less_home___default.a), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'home-view' }, 'Hello world!');
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
}, _temp)) || _class);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var base = function base(app) {
  var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

  router.post('/client-log', function (req, res) {
    req.__ASTRAL__.log.client.push('Test log');
    res.status(400);
  });

  app.use('/base/api', router);
};

/* harmony default export */ __webpack_exports__["a"] = base;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Base middleware
 */
var base = function base(app) {
  app.use(function (req, res, next) {
    req.__ASTRAL__ = {};
    var logEntry = {
      timestamp: null,
      route: null,
      server: [],
      client: []
    };
    req.__ASTRAL__.log = logEntry;
    next();
  });
};

/* harmony default export */ __webpack_exports__["a"] = base;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoStyle; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class, _temp;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



/**
 * Isomorphic hot-loading CSS (LESS), paired with 'isomorphic-style-loader'
 */
var IsoStyle = (_temp = _class = function (_Component) {
  _inherits(IsoStyle, _Component);

  function IsoStyle() {
    _classCallCheck(this, IsoStyle);

    return _possibleConstructorReturn(this, (IsoStyle.__proto__ || Object.getPrototypeOf(IsoStyle)).apply(this, arguments));
  }

  _createClass(IsoStyle, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { insertCss: this.props.onInsertCss };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return IsoStyle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired,
  onInsertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
}, _class.childContextTypes = {
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
}, _temp);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class, _temp;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



/**
 * Base (or root) component for application
 */
var Base = (_temp = _class = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'base-view' }, this.props.children);
    }
  }]);

  return Base;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
}, _temp);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_controller__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base_api_controller__["a"]; });
/**
 * Global controller handler
 * Import/Export any new controllers here, to make available in server.js
 */




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winston__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sysLog; });
/* unused harmony export dbLog */
/**
 * Astral Logger
 * Each can be imported globally through ES6 standard
 */




var custom = {
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
    clientSideError: 9,
    error: 10
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
    clientSideError: 'red',
    error: 'red'
  },
  consoleOpts: {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true
  },
  fileOpts: {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true
  }
};

// Log stuff
var transport = void 0;
var opts = void 0;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  transport = __WEBPACK_IMPORTED_MODULE_0_winston___default.a.transports.Console;
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
var sysLog = new __WEBPACK_IMPORTED_MODULE_0_winston___default.a.Logger({
  level: 'error',
  levels: custom.levels,
  transports: [new transport(opts)]
});

// Database logs
var dbLog = new __WEBPACK_IMPORTED_MODULE_0_winston___default.a.Logger({
  level: 'error',
  levels: custom.levels,
  transports: [new transport(opts)]
});

// Color to logs
__WEBPACK_IMPORTED_MODULE_0_winston___default.a.addColors(custom.colors);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_middleware__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base_api_middleware__["a"]; });
/**
 * Global middleware handler
 * Import/Export any new middleware here, to make available in server.js
 */




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_reduce__ = __webpack_require__(6);



var globalReducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  appRedux: __WEBPACK_IMPORTED_MODULE_1__app_reduce__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = globalReducers;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_views_base_jsx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router_jsx__ = __webpack_require__(7);





/**
 * Global application routes, each module must be imported here to expose to
 * the URL namespace
 */
var routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { name: 'base', component: __WEBPACK_IMPORTED_MODULE_2__base_views_base_jsx__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_3__app_router_jsx__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = routes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "#home-view {\n  text-align: center;\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(18);
    var insertCss = __webpack_require__(21);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/less-loader/index.js!./home.less", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/less-loader/index.js!./home.less");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(24);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(22);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);