import assignIn from 'lodash/fp/assignIn';
import * as fp from 'lodash/fp';
import assignInWith from 'lodash/fp/assignInWith';

const source = { a: 1 };
const object = { b: '1' };

assignIn(source, object); // $ExpectType { a: number; } & { b: string; }
assignIn(source)(object); // $ExpectType { a: number; } & { b: string; }
assignIn(source); // $ExpectType <O>(object: O) => { a: number; } & O

isAliasOf2(fp.assignIn, fp.assignInWith);
isAliasOf2(fp.assignInWith, fp.assignIn);

declare function x(a: number): boolean;
declare function y(a: number, b: boolean): boolean;

isAliasOf2(x, y);
isAliasOf2(y, x);

type Fun<A, B, C, R> = (a: A, b: B, c: C) => R;

declare function isAliasOf2<A, B, C, R>(type: Fun<A, B, C, R>, alias: Fun<A, B, C, R>): true;
