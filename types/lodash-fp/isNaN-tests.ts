import isNaN from "lodash/fp/isNaN";
import * as fp from "lodash/fp";

isNaN(NaN); // $ExpectType boolean
isNaN(); // $ExpectType boolean

isAliasOf(fp.isNaN, isNaN); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
