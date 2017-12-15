import assignInWith from 'lodash/fp/assignInWith';
import * as fp from 'lodash/fp';

const source = { a: 1 };
const object = { b: '1' };

const customizer = (objValue: any, srcValue: any) => objValue && srcValue;

assignInWith(customizer, source, object); // $ExpectType { a: number; } & { b: string; }
assignInWith(customizer)(source, object); // $ExpectType { a: number; } & { b: string; }
assignInWith(customizer, source)(object); // $ExpectType { a: number; } & { b: string; }
assignInWith(customizer)(source)(object); // $ExpectType { a: number; } & { b: string; }

isAliasOf(fp.assignInWith, assignInWith); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
