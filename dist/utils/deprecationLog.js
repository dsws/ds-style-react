import _classCallCheck from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/createClass";

var noop = function noop() {};

var depLogger = {
  log: noop
};
var LOG_PREFIX = "Wix-Style-React: [WARNING] ";

if (process.env.NODE_ENV !== 'production') {
  var DeprecationLogger =
  /*#__PURE__*/
  function () {
    function DeprecationLogger() {
      _classCallCheck(this, DeprecationLogger);

      this.reportedMessages = new Set();

      this.printWarning = function (msg) {
        var message = "".concat(LOG_PREFIX).concat(msg);

        if (console) {
          console.warn(message); // eslint-disable-line
        }

        try {
          // --- Welcome to debugging wix-style-react ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      this.log = this.log.bind(this);
    }

    _createClass(DeprecationLogger, [{
      key: "log",

      /**
       * Log a warning message, once per key. (Calling `log` twice with same key would result in one log)
       *
       * @param {*} message
       * @memberof DeprecationLogger
       */
      value: function log(message) {
        if (!this.reportedMessages.has(message)) {
          this.reportedMessages.add(message);
          this.printWarning(message);
        }
      }
    }]);

    return DeprecationLogger;
  }();

  depLogger = new DeprecationLogger();
}

export { depLogger };
export default (function (msg) {
  return depLogger.log(msg);
});