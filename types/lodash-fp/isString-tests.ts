import isString from "lodash/fp/isString";
import * as fp from "lodash/fp";

isString('string'); // $ExpectType true
isString(null); // $ExpectType boolean
isString([]); // $ExpectType boolean
isString({}); // $ExpectType boolean
isString(0); // $ExpectType boolean
isString(undefined); // $ExpectType boolean
isString(true); // $ExpectType boolean
isString(false); // $ExpectType boolean

declare let x: string | null;
if (isString(x)) {
    x; // $ExpectType string
} else {
    x; // $ExpectType null
}

fp.isString('string'); // $ExpectType true
fp.isString(null); // $ExpectType boolean
fp.isString([]); // $ExpectType boolean
fp.isString({}); // $ExpectType boolean
fp.isString(0); // $ExpectType boolean
fp.isString(undefined); // $ExpectType boolean
fp.isString(true); // $ExpectType boolean
fp.isString(false); // $ExpectType boolean
