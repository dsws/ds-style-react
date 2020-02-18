import times from './times';
describe('times operator', function () {
  it('should return an empty array for non-number invoke amount', function () {
    expect(times({})).toEqual([]);
    expect(times(true)).toEqual([]);
    expect(times('')).toEqual([]);
    expect(times(null)).toEqual([]);
    expect(times(undefined)).toEqual([]);
    expect(times(Symbol["for"]('foo'))).toEqual([]);
  });
  it('should return an empty array for non-function iteratee', function () {
    expect(times(5, 'not-a-function')).toEqual([]);
  });
  it('should return a range from 0 to X', function () {
    expect(times(3)).toEqual([0, 1, 2]);
  });
  it('should return iteratee results array', function () {
    var multiple = function multiple(value) {
      return value + value;
    };

    expect(times(3, multiple)).toEqual([0, 2, 4]);
  });
});