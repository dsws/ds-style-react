import _regeneratorRuntime from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/danish/Documents/storybookdemo/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../../test/utils/unit';
import AdaptiveHeading from '../AdaptiveHeading';
import { adaptiveHeadingDriverFactory } from '../AdaptiveHeading.uni.driver';
describe('AdaptiveHeading', function () {
  var render = createRendererWithUniDriver(adaptiveHeadingDriverFactory);
  afterEach(function () {
    cleanup();
  });
  it('should render',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var _render, driver;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = render(React.createElement(AdaptiveHeading, {
              text: "text",
              textInShort: "short"
            })), driver = _render.driver;
            _context.t0 = expect;
            _context.next = 4;
            return driver.exists();

          case 4:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1).toBe(true);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should render heading when there is no short version',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var _render2, driver;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = render(React.createElement(AdaptiveHeading, {
              text: "text"
            })), driver = _render2.driver;
            _context2.t0 = expect;
            _context2.next = 4;
            return driver.getText();

          case 4:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)(_context2.t1).toBe('text');
            _context2.t2 = expect;
            _context2.next = 9;
            return driver.getShortText();

          case 9:
            _context2.t3 = _context2.sent;
            (0, _context2.t2)(_context2.t3).toBeNull();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should render long and short versions',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3() {
    var _render3, driver;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = render(React.createElement(AdaptiveHeading, {
              text: "long",
              textInShort: "short"
            })), driver = _render3.driver;
            _context3.t0 = expect;
            _context3.next = 4;
            return driver.getText();

          case 4:
            _context3.t1 = _context3.sent;
            (0, _context3.t0)(_context3.t1).toBe('long');
            _context3.t2 = expect;
            _context3.next = 9;
            return driver.getShortText();

          case 9:
            _context3.t3 = _context3.sent;
            (0, _context3.t2)(_context3.t3).toBe('short');

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should render h1 by default',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee4() {
    var _render4, driver;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = render(React.createElement(AdaptiveHeading, {
              text: "long",
              textInShort: "short"
            })), driver = _render4.driver;
            _context4.t0 = expect;
            _context4.next = 4;
            return driver.getAppearance();

          case 4:
            _context4.t1 = _context4.sent;
            (0, _context4.t0)(_context4.t1).toBe('H1');

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should render h2',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee5() {
    var _render5, driver;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = render(React.createElement(AdaptiveHeading, {
              text: "long",
              textInShort: "short",
              appearance: "H2"
            })), driver = _render5.driver;
            _context5.t0 = expect;
            _context5.next = 4;
            return driver.getAppearance();

          case 4:
            _context5.t1 = _context5.sent;
            (0, _context5.t0)(_context5.t1).toBe('H2');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should render h6',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee6() {
    var _render6, driver;

    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _render6 = render(React.createElement(AdaptiveHeading, {
              text: "long",
              textInShort: "short",
              appearance: "H6"
            })), driver = _render6.driver;
            _context6.t0 = expect;
            _context6.next = 4;
            return driver.getAppearance();

          case 4:
            _context6.t1 = _context6.sent;
            (0, _context6.t0)(_context6.t1).toBe('H6');

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});