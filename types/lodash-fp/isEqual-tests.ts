import isEqual from "lodash/fp/isEqual";
import * as fp from "lodash/fp";

isEqual(null, {}); // $ExpectType boolean
isEqual([], null); // $ExpectType boolean
isEqual({}, []); // $ExpectType boolean
isEqual(0, 1); // $ExpectType boolean
isEqual(undefined, true); // $ExpectType boolean

isEqual(true)(true); // $ExpectType boolean
isEqual([])({}); // $ExpectType boolean

isAliasOf(fp.isEqual, isEqual); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
