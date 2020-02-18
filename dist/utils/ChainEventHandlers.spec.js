import _toConsumableArray from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import { chainEventHandlers } from './ChainEventHandlers';
describe('chainEventHandlers', function () {
  var newEvent = function newEvent() {
    return {
      defaultPrevented: false
    };
  };

  it('should run handler by order', function () {
    var callResults = [];
    var functions = [1, 2, 3, 4].map(function (i) {
      return function () {
        return callResults.push(i);
      };
    });
    chainEventHandlers.apply(void 0, _toConsumableArray(functions))(newEvent());
    expect(callResults).toEqual([1, 2, 3, 4]);
  });
  it('should skip undefined handlers', function () {
    var callResults = [];
    var funcs = [1, undefined, 3, 4].map(function (i) {
      return i ? function () {
        return callResults.push(i);
      } : undefined;
    });
    chainEventHandlers.apply(void 0, _toConsumableArray(funcs))(newEvent());
    expect(callResults).toEqual([1, 3, 4]);
  });
});