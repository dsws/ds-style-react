import mapValue from './mapValue';
import sinon from 'sinon';
describe('mapValue operator', function () {
  it('should return an empty object for non-object input', function () {
    expect(mapValue(1)).toEqual({});
    expect(mapValue(true)).toEqual({});
    expect(mapValue('')).toEqual({});
    expect(mapValue(null)).toEqual({});
    expect(mapValue(undefined)).toEqual({});
    expect(mapValue(Symbol["for"]('foo'))).toEqual({});
  });
  it('should return an empty object for non-function map function', function () {
    expect(mapValue({
      a: 1
    }, 'not-a-function')).toEqual({});
  });
  it('should return given input', function () {
    var anObject = {
      a: 1,
      b: '2'
    };
    expect(mapValue(anObject)).toEqual({
      a: 1,
      b: '2'
    });
  });
  it('should project input values by map function', function () {
    var anObject = {
      a: 1,
      b: 2
    };

    var multiple = function multiple(value) {
      return value + value;
    };

    expect(mapValue(anObject, multiple)).toEqual({
      a: 2,
      b: 4
    });
  });
  it('should call map function with (value, key, object)', function () {
    var anObject = {
      a: 1
    };
    var mapFunc = sinon.spy();
    mapValue(anObject, mapFunc);
    expect(mapFunc.calledWithExactly(1, 'a', anObject)).toBe(true);
  });
});