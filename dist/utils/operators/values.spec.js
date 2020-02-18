import values from './values';
describe('values operator', function () {
  it('should return an empty object for invalid input', function () {
    expect(values(1)).toEqual([]);
    expect(values(true)).toEqual([]);
    expect(values(null)).toEqual([]);
    expect(values(undefined)).toEqual([]);
    expect(values(Symbol["for"]('foo'))).toEqual([]);
  });
  it('should return copy of give array', function () {
    expect(values([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('should return an array of characters', function () {
    expect(values('abc')).toEqual(['a', 'b', 'c']);
  });
  it('should return an array of object own values', function () {
    var anObject = {
      a: 1,
      b: '2',
      c: true
    };
    var result = values(anObject);
    var expectedValues = [1, '2', true]; // iteration order is not guaranteed

    expectedValues.forEach(function (val) {
      return expect(result).toContain(val);
    });
    expect(result).toHaveLength(3);
  });
});