import _toConsumableArray from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import isObject from './isObject';
export default function values(obj) {
  if (Array.isArray(obj) || typeof obj === 'string') {
    return _toConsumableArray(obj);
  }

  if (!isObject(obj)) {
    return [];
  }

  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}