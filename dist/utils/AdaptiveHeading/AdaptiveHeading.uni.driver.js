import _regeneratorRuntime from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import DataHooks from './dataHooks';
export var adaptiveHeadingDriverFactory = function adaptiveHeadingDriverFactory(base) {
  return _objectSpread({}, baseUniDriverFactory(base), {
    /** Get short version of text */
    getShortText: function () {
      var _getShortText = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var _short, text;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return base.$("[data-hook=\"".concat(DataHooks.textInShort, "\"]"));

              case 2:
                _short = _context.sent;
                _context.next = 5;
                return _short.exists();

              case 5:
                if (!_context.sent) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return _short.text();

              case 8:
                text = _context.sent;
                return _context.abrupt("return", text || null);

              case 10:
                return _context.abrupt("return", null);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getShortText() {
        return _getShortText.apply(this, arguments);
      }

      return getShortText;
    }(),

    /** Get long version of text */
    getText: function () {
      var _getText = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        var _long, text;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return base.$("[data-hook=\"".concat(DataHooks.text, "\"]"));

              case 2:
                _long = _context2.sent;
                _context2.next = 5;
                return _long.exists();

              case 5:
                if (!_context2.sent) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return _long.text();

              case 8:
                text = _context2.sent;
                return _context2.abrupt("return", text || null);

              case 10:
                return _context2.abrupt("return", base.text());

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getText() {
        return _getText.apply(this, arguments);
      }

      return getText;
    }(),

    /** Get tagName */
    getAppearance: function () {
      var _getAppearance = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", base._prop('tagName'));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAppearance() {
        return _getAppearance.apply(this, arguments);
      }

      return getAppearance;
    }()
  });
};