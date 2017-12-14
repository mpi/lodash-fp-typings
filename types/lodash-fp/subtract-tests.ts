import subtract from 'lodash/fp/subtract';
import * as fp from 'lodash/fp';

subtract(1, 2); // $ExpectType number
subtract(1); // $ExpectType (minuend: number) => number

isAliasOf(fp.subtract, subtract); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
