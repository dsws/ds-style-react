import deprecationLog from './deprecationLog';
var cachedConsoleWarn = global.console.warn;
describe('deprecationLog', function () {
  beforeEach(function () {
    global.console.warn = jest.fn();
  });
  afterEach(function () {
    global.console.warn = cachedConsoleWarn;
  });
  it('should log the appropriate message content', function () {
    deprecationLog('Some message');
    expect(global.console.warn).toBeCalledWith('Wix-Style-React: [WARNING] Some message');
  });
  it('should log only once per message', function () {
    deprecationLog('message');
    expect(global.console.warn.mock.calls).toHaveLength(1);
    deprecationLog('message');
    expect(global.console.warn.mock.calls).toHaveLength(1);
    deprecationLog('message2');
    expect(global.console.warn.mock.calls).toHaveLength(2);
  });
});