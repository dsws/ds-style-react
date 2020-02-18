/**
 * Chain event handlers.
 *
 *
 * @returns an event handler which calls all given handler by order while skipping undefined handlers.
 */
export function chainEventHandlers() {
  for (var _len = arguments.length, handlers = new Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  return function (event) {
    return handlers.filter(function (i) {
      return i;
    }).forEach(function (handler) {
      return handler(event);
    });
  };
}