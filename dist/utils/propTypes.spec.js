import React from 'react';
import { render, cleanup } from '../../test/utils/unit';
import { allValidators } from './propTypes';
describe('Utils: propTypes', function () {
  describe('allValidators', function () {
    var consoleErrorSpy;
    beforeEach(function () {
      consoleErrorSpy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
    });
    afterEach(function () {
      consoleErrorSpy.mockRestore();
      cleanup();
      jest.resetModules();
    });
    it('should not log error return undefined when all validators pass', function () {
      var Comp = function Comp() {
        return React.createElement("div", null);
      };

      render(React.createElement(Comp, null));
      expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });
    it('should log errors for both validators', function () {
      var Comp = function Comp() {
        return React.createElement("div", null);
      };

      render(React.createElement(Comp, {
        value: 'invalid value'
      }));
      expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
      expect(consoleErrorSpy.mock.calls[0][0]).toEqual(expect.stringContaining("Invalid value"));
      expect(consoleErrorSpy.mock.calls[1][0]).toEqual(expect.stringContaining("my error"));
    });
  });
});