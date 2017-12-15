import assignInAllWith from 'lodash/fp/assignInAllWith';
import * as fp from 'lodash/fp';

const source1 = { a: 1 };
const source2 = { b: 1 };
const source3 = { c: 1 };
const source4 = { d: 1 };
const object =  { z: '1' };

const sources = [source1, source2, source3, source4];
const customizer = (objValue: any, srcValue: any) => objValue && srcValue;

let result: { a: number; b: number; c: number; d: number; z: string; };

result = assignInAllWith(customizer, sources, object);
result = assignInAllWith(customizer)(sources, object);
result = assignInAllWith(customizer, sources)(object);
result = assignInAllWith(customizer)(sources)(object);

isAliasOf(fp.assignInAllWith, assignInAllWith); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
