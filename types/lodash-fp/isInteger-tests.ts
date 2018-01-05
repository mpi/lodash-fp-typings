import isInteger from "lodash/fp/isInteger";
import * as fp from "lodash/fp";

isInteger(3); // $ExpectType boolean
isInteger('3'); // $ExpectType boolean
isInteger(Infinity); // $ExpectType boolean
isInteger(Number.MIN_VALUE); // $ExpectType boolean
isInteger(3.5); // $ExpectType boolean

declare const a: string | number;

if (isInteger(a)) {
    a; // $ExpectType number
} else {
    a; // $ExpectType string
}
