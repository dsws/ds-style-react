import _defineProperty from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from 'prop-types';
/**
 * This is a workaround for AutoDocs, so we can apply custom propTypes validators with side-effects, and not affect the generated prop type.
 * If we had support for writing JSDoc for props with a `@type` tag, then we wouldn't need this.
 */

export function extendPropTypes(Component, propTypes) {
  Component.propTypes = _objectSpread({}, Component.propTypes, {}, propTypes);
}
/**
 * Runs all validators.
 */

export function allValidators() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return function (props, propName, componentName) {
    validators.forEach(function (validator) {
      PropTypes.checkPropTypes(_defineProperty({}, propName, validator), props, propName, componentName);
    });
  };
}