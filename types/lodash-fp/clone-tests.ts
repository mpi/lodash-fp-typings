import clone from 'lodash/fp/clone';
import * as fp from 'lodash/fp';

const obj = { a: 1, b: 2, c: '3' };

clone(obj); // $ExpectType { a: number; b: number; c: string; }

isAliasOf(fp.clone, clone); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
