import _defineProperty from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import isObject from './isObject';
export default function pick(obj) {
  var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isObject(obj)) {
    return {};
  }

  var pathsArr;

  if (typeof paths === 'string') {
    pathsArr = [paths];
  } else if (!Array.isArray(paths)) {
    pathsArr = [];
  } else {
    pathsArr = paths;
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (pathsArr.indexOf(key) !== -1) {
      return _objectSpread({}, acc, _defineProperty({}, key, obj[key]));
    }

    return acc;
  }, {});
}