import isObject from './isObject';
describe('isObject operator', function () {
  it('should return false for primitives', function () {
    expect(isObject(4)).toBe(false);
    expect(isObject('4')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol["for"]('foo'))).toBe(false);
  });
  it('should return false for null', function () {
    expect(isObject(null)).toBe(false);
  });
  it('should return false for undefined', function () {
    expect(isObject(undefined)).toBe(false);
  });
  it('should return true for an object', function () {
    expect(isObject({})).toBe(true);
  });
});