import identity from './identity';
import range from './range';
export default function times(invokeAmount) {
  var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

  if (typeof invokeAmount !== 'number' || typeof iteratee !== 'function') {
    return [];
  }

  if (invokeAmount < 0) {
    return [];
  }

  return range(0, invokeAmount).map(iteratee);
}