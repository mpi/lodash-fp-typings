import assignAllWith from 'lodash/fp/assignAllWith';
import * as fp from 'lodash/fp';

const source1 = { a: 1 };
const source2 = { b: 1 };
const source3 = { c: 1 };
const source4 = { d: 1 };
const object =  { z: '1' };

const sources = [source1, source2, source3, source4];
const customizer = (objValue: any, srcValue: any) => objValue && srcValue;

let result: { a: number; b: number; c: number; d: number; z: string; };

result = assignAllWith(customizer, sources, object);
result = assignAllWith(customizer)(sources, object);
result = assignAllWith(customizer, sources)(object);
result = assignAllWith(customizer)(sources)(object);

isAliasOf(fp.assignAllWith, assignAllWith); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
