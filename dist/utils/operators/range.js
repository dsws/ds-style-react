export default function range(start, end) {
  var itemsAmount = Math.abs(start - end);

  var _range = Array.apply(null, {
    length: itemsAmount
  }).map(Number.call, Number);

  if (start < end) {
    return _range.map(function (item) {
      return item + start;
    });
  }

  return _range.map(function (_, index) {
    return start - index;
  });
}