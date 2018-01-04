import memoize from 'lodash/fp/memoize';
import * as fp from 'lodash/fp';

function add(a: number, b: number) {
  return a + b;
}

const join = (a: string, b: string) => a + b;

memoize(add); // $ExpectType (a: number, b: number) => number
memoize(join); // $ExpectType (a: string, b: string) => string

fp.memoize(add); // $ExpectType (a: number, b: number) => number
fp.memoize(join); // $ExpectType (a: string, b: string) => string
