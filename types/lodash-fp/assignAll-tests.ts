import assignAll from 'lodash/fp/assignAll';
import * as fp from 'lodash/fp';

const source1 = { a: 1 };
const source2 = { b: 1 };
const source3 = { c: 1 };
const source4 = { d: 1 };
const object =  { z: '1' };

const sources = [source1, source2, source3, source4];

interface All { a: number; b: number; c: number; d: number; z: string; }

const all: All = assignAll(sources, object);
// assignAll(sources);

isAliasOf(fp.assignAll, assignAll); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
