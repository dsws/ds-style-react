import _defineProperty from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/slicedToArray";
export var generateDataAttr = function generateDataAttr(props, filter) {
  return Object.entries(props).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return filter && filter.includes(key);
  }).reduce(function (output, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return _objectSpread({}, output, _defineProperty({}, "data-".concat(key), value));
  }, {});
};