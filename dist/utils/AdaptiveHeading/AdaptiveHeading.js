import _classCallCheck from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import Heading from '../../Heading';
import Tooltip from '../../Tooltip';
import DataHooks from './dataHooks';
import styles from './AdaptiveHeading.st.css';
/** AdaptiveHeading */

var AdaptiveHeading =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AdaptiveHeading, _React$PureComponent);

  function AdaptiveHeading() {
    _classCallCheck(this, AdaptiveHeading);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdaptiveHeading).apply(this, arguments));
  }

  _createClass(AdaptiveHeading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataHook = _this$props.dataHook,
          text = _this$props.text,
          _this$props$appearanc = _this$props.appearance,
          appearance = _this$props$appearanc === void 0 ? 'H1' : _this$props$appearanc,
          light = _this$props.light,
          emptyLast = _this$props.emptyLast,
          textInShort = _this$props.textInShort;

      if (!textInShort) {
        if (emptyLast) {
          return React.createElement(Heading, Object.assign({}, styles('headerWrapper', {
            appearance: appearance
          }, this.props), {
            dataHook: dataHook,
            appearance: appearance,
            light: light
          }), React.createElement("span", {
            className: styles.headerShort
          }, "\xA0"), React.createElement("span", {
            "data-hook": DataHooks.text,
            className: styles.headerFull
          }, text));
        }

        return React.createElement(Heading, {
          dataHook: dataHook,
          appearance: appearance,
          light: light,
          ellipsis: true
        }, React.createElement("span", {
          "data-hook": DataHooks.text
        }, text));
      }

      if (emptyLast) {
        return React.createElement(Heading, Object.assign({}, styles('headerWrapper', {
          appearance: appearance
        }, this.props), {
          dataHook: dataHook,
          appearance: appearance,
          light: light
        }), React.createElement("div", {
          className: styles.headerShort
        }, React.createElement("div", Object.assign({
          "aria-hidden": "true"
        }, styles('headerWrapper', {
          appearance: appearance
        }, this.props)), React.createElement("span", {
          className: styles.headerShort
        }, "\xA0"), React.createElement("span", {
          className: styles.headerFull,
          "data-hook": DataHooks.textInShort,
          title: text
        }, textInShort))), React.createElement("span", {
          "data-hook": DataHooks.text,
          className: styles.headerFull
        }, text));
      }

      return React.createElement(Heading, Object.assign({}, styles('headerWrapper', {
        appearance: appearance
      }, this.props), {
        dataHook: dataHook,
        appearance: appearance,
        light: light
      }), React.createElement("div", {
        className: styles.headerShort
      }, React.createElement("span", {
        "data-hook": DataHooks.textInShort,
        "aria-hidden": "true",
        title: text
      }, React.createElement(Tooltip, {
        upgrade: true,
        content: text
      }, React.createElement("div", {
        className: styles.ellipsis
      }, textInShort)))), React.createElement("span", {
        "data-hook": DataHooks.text,
        className: styles.headerFull
      }, text));
    }
  }]);

  return AdaptiveHeading;
}(React.PureComponent);

AdaptiveHeading.displayName = 'AdaptiveHeading';
export default AdaptiveHeading;