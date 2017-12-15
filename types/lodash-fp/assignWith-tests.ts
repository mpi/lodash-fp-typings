import assignWith from 'lodash/fp/assignWith';
import * as fp from 'lodash/fp';

const source = { a: 1 };
const object = { b: '1' };

const customizer = (objValue: any, srcValue: any) => objValue && srcValue;

assignWith(customizer, source, object); // $ExpectType { a: number; } & { b: string; }
assignWith(customizer)(source, object); // $ExpectType { a: number; } & { b: string; }
assignWith(customizer, source)(object); // $ExpectType { a: number; } & { b: string; }
assignWith(customizer)(source)(object); // $ExpectType { a: number; } & { b: string; }

isAliasOf(fp.assignWith, assignWith); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
