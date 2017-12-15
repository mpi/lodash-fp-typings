import assignIn from 'lodash/fp/assignIn';
import * as fp from 'lodash/fp';

const source = { a: 1 };
const object = { b: '1' };

assignIn(source, object); // $ExpectType { a: number; } & { b: string; }
assignIn(source)(object); // $ExpectType { a: number; } & { b: string; }
assignIn(source); // $ExpectType <O>(object: O) => { a: number; } & O

isAliasOf(fp.assignIn, assignIn); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
