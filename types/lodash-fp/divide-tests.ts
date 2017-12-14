import divide from 'lodash/fp/divide';
import * as fp from 'lodash/fp';

divide(1, 2); // $ExpectType number
divide(1); // $ExpectType (dividend: number) => number

isAliasOf(fp.divide, divide); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
