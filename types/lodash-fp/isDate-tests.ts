import isDate from "lodash/fp/isDate";
import * as fp from "lodash/fp";

isDate(new Date()); // $ExpectType boolean
isDate(null); // $ExpectType boolean
isDate([]); // $ExpectType boolean
isDate({}); // $ExpectType boolean
isDate(0); // $ExpectType boolean
isDate(undefined); // $ExpectType boolean
isDate(true); // $ExpectType boolean
isDate(false); // $ExpectType boolean

declare let x: Date | string;
if (isDate(x)) {
    x; // $ExpectType Date
} else {
    x; // $ExpectType string
}

fp.isDate(new Date()); // $ExpectType boolean
fp.isDate(null); // $ExpectType boolean
fp.isDate([]); // $ExpectType boolean
fp.isDate({}); // $ExpectType boolean
fp.isDate(0); // $ExpectType boolean
fp.isDate(undefined); // $ExpectType boolean
fp.isDate(true); // $ExpectType boolean
fp.isDate(false); // $ExpectType boolean
