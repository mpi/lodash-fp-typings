import maxBy from 'lodash/fp/maxBy';
import * as fp from 'lodash/fp';

interface Obj {
  x: number;
}

declare const a: Obj;
declare const b: Obj;

const abs = (v: number) => v < 0 ? v : -v;

const numbers = [1, 2, 3];
const objects = [a, b];

maxBy(abs, numbers); // $ExpectType number
maxBy(abs)(numbers); // $ExpectType number
// maxBy('x', objects); // $ExpectType Obj
// maxBy('x')(objects); // $ExpectType Obj
maxBy((i: Obj) => i.x)(objects); // $ExpectType Obj
// maxBy(abs)([]); // $ExpectType undefined
