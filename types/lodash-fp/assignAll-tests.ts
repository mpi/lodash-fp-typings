import assignAll from 'lodash/fp/assignAll';
import * as fp from 'lodash/fp';

const source1 = { a: 1 };
const source2 = { b: 1 };
const source3 = { c: 1 };
const source4 = { d: 1 };
const object =  { z: '1' };

const sources = [source1, source2, source3, source4];

let result: { a: number; b: number; c: number; d: number; z: string; };

result = assignAll(sources, object);
result = assignAll(sources)(object);

isAliasOf(fp.assignAll, assignAll); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
