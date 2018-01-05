import isNumber from "lodash/fp/isNumber";
import * as fp from "lodash/fp";

isNumber(3); // $ExpectType boolean
isNumber('3'); // $ExpectType boolean
isNumber(Infinity); // $ExpectType boolean
isNumber(-Infinity); // $ExpectType boolean
isNumber(NaN); // $ExpectType boolean
isNumber(Number.MIN_VALUE); // $ExpectType boolean
isNumber(3.5); // $ExpectType boolean

declare const a: string | number;

if (isNumber(a)) {
    a; // $ExpectType number
} else {
    a; // $ExpectType string
}
