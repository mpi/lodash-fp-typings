import add from 'lodash/fp/add';
import * as fp from 'lodash/fp';

add(1, 2); // $ExpectType number
add(1); // $ExpectType (augend: number) => number

isAliasOf(fp.add, add); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
