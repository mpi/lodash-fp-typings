import isLength from "lodash/fp/isLength";
import * as fp from "lodash/fp";

isLength(3); // $ExpecetType boolean
isLength('3'); // $ExpecetType boolean
isLength(Infinity); // $ExpecetType boolean
isLength(Number.MIN_VALUE); // $ExpectType boolean
isLength(3.5); // $ExpectType boolean

declare const a: string | number;

if (isLength(a)) {
    a; // $ExpectType number
} else {
    a; // $ExpectType string
}

fp.isLength(3); // $ExpecetType boolean
fp.isLength('3'); // $ExpecetType boolean
fp.isLength(Infinity); // $ExpecetType boolean
fp.isLength(Number.MIN_VALUE); // $ExpectType boolean
fp.isLength(3.5); // $ExpectType boolean
