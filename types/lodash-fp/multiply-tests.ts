import multiply from 'lodash/fp/multiply';
import * as fp from 'lodash/fp';

multiply(1, 2); // $ExpectType number
multiply(1); // $ExpectType (multiplier: number) => number

isAliasOf(fp.multiply, multiply); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
