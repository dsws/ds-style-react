import range from './range';
describe('range operator', function () {
  it('should create an ascending range of numbers', function () {
    expect(range(1, 4)).toEqual([1, 2, 3]);
  });
  it('should create a descending range of numbers', function () {
    expect(range(4, 1)).toEqual([4, 3, 2]);
  });
});