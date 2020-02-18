import { generateDataAttr } from './generateDataAttr';
describe('generateDataAttr', function () {
  it('should return data attributes [when] given props & filter', function () {
    var props = {
      skin: 'dark'
    };
    var result = generateDataAttr(props, ['skin']);
    expect(result).toEqual({
      'data-skin': 'dark'
    });
  });
  it('should return empty object [when] given only props', function () {
    var props = {
      skin: 'dark'
    };
    var result = generateDataAttr(props);
    expect(result).toEqual({});
  });
  it('should return empty object [when] given empty props', function () {
    var props = {};
    var result = generateDataAttr(props, ['skin']);
    expect(result).toEqual({});
  });
  it('should return data attributes [when] given values with booleans', function () {
    var props = {
      disabled: false
    };
    var result = generateDataAttr(props, ['disabled']);
    expect(result).toEqual({
      'data-disabled': false
    });
  });
});