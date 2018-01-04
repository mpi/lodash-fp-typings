import max from 'lodash/fp/max';
import * as fp from 'lodash/fp';

interface Obj {
  x: number;
}

declare const a: Obj;
declare const b: Obj;

const numbers = [1, 2, 3];
const objects = [a, b];

max(numbers); // $ExpectType number
max(objects); // $ExpectType Obj
max([]); // $ExpectType undefined

fp.max(numbers); // $ExpectType number
fp.max(objects); // $ExpectType Obj
fp.max([]); // $ExpectType undefined
