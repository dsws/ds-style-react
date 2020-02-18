import pickBy from './pickBy';
import sinon from 'sinon';
describe('pickBy operator', function () {
  it('should return an empty object for non-object input', function () {
    expect(pickBy(1)).toEqual({});
    expect(pickBy(true)).toEqual({});
    expect(pickBy('')).toEqual({});
    expect(pickBy(null)).toEqual({});
    expect(pickBy(undefined)).toEqual({});
    expect(pickBy(Symbol["for"]('foo'))).toEqual({});
  });
  it('should return an empty object for non-function pick function', function () {
    expect(pickBy({
      a: 1
    }, 'not-a-function')).toEqual({});
  });
  it('should return given input', function () {
    expect(pickBy({
      a: 1
    })).toEqual({
      a: 1
    });
  });
  it('should pick input values by predicate', function () {
    var anObject = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6
    };

    var biggerThanThree = function biggerThanThree(value) {
      return value > 3;
    };

    expect(pickBy(anObject, biggerThanThree)).toEqual({
      d: 4,
      e: 5,
      f: 6
    });
  });
  it('should call predicate with (value, key)', function () {
    var anObject = {
      a: 1
    };
    var pickFunc = sinon.spy();
    pickBy(anObject, pickFunc);
    expect(pickFunc.calledWithExactly(1, 'a'));
  });
});