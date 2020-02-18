import identity from './identity';
describe('identity operator', function () {
  it('should return given input', function () {
    var aNumber = 4;
    var anObject = {
      a: 1
    };
    expect(identity(aNumber)).toBe(4);
    expect(identity(anObject)).toBe(anObject);
  });
});