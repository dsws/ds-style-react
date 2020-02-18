import _defineProperty from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import identity from './identity';
import isObject from './isObject';
export default function pickBy(obj) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

  if (!isObject(obj) || typeof predicate !== 'function') {
    return {};
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (predicate(obj[key], key)) {
      return _objectSpread({}, acc, _defineProperty({}, key, obj[key]));
    }

    return acc;
  }, {});
}