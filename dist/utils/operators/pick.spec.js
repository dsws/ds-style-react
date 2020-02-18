import pick from './pick';
describe('pick operator', function () {
  it('should return an empty object for non-object input', function () {
    expect(pick(1, ['a'])).toEqual({});
    expect(pick(true, ['a'])).toEqual({});
    expect(pick('', ['a'])).toEqual({});
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(Symbol["for"]('foo'), ['a'])).toEqual({});
  });
  it('should return an empty object for invalid paths', function () {
    expect(pick({
      a: 1
    }, {})).toEqual({});
    expect(pick({
      a: 1
    }, 1)).toEqual({});
    expect(pick({
      a: 1
    }, true)).toEqual({});
    expect(pick({
      a: 1
    }, undefined)).toEqual({});
    expect(pick({
      a: 1
    }, null)).toEqual({});
    expect(pick({
      a: 1
    }, Symbol["for"]('foo'))).toEqual({});
  });
  it('should pick a single field', function () {
    var anObject = {
      a: 1,
      b: 2
    };
    expect(pick(anObject, 'a')).toEqual({
      a: 1
    });
  });
  it('should pick multiple fields', function () {
    var anObject = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(pick(anObject, ['a', 'c'])).toEqual({
      a: 1,
      c: 3
    });
  });
  it('should ignore missing paths', function () {
    var anObject = {
      a: 1,
      b: 2
    };
    expect(pick(anObject, ['a', 'z'])).toEqual({
      a: 1
    });
  });
});