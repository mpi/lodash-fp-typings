import isInteger from "lodash/fp/isInteger";
import * as fp from "lodash/fp";

isInteger(3); // $ExpecetType boolean
isInteger('3'); // $ExpecetType boolean
isInteger(Infinity); // $ExpecetType boolean
isInteger(Number.MIN_VALUE); // $ExpectType boolean
isInteger(3.5); // $ExpectType boolean

declare const a: string | number;

if (isInteger(a)) {
    a; // $ExpectType number
} else {
    a; // $ExpectType string
}

isAliasOf(fp.isInteger, isInteger); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
