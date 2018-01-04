import compact from 'lodash/fp/compact';
import * as fp from 'lodash/fp';

const arr = [1, 2, '3', null, false, undefined, NaN, 0, ""];

compact(arr); // $ExpectType (string | number | true)[]

compact(null); // $ExpectType {}[]
compact(undefined); // $ExpectType {}[]

isAliasOf(fp.compact, compact); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
