import isMap from "lodash/fp/isMap";
import * as fp from "lodash/fp";

const a = new Map();

isMap(a); // $ExpectType boolean
isMap(); // $ExpectType boolean

if (isMap(a)) {
    a; // $ExpectType Map<any, any>
}

isAliasOf(fp.isMap, isMap); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
