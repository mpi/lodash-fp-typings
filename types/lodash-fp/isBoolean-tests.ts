import isBoolean from "lodash/fp/isBoolean";
import * as fp from "lodash/fp";

isBoolean(null); // $ExpectType boolean
isBoolean([]); // $ExpectType boolean
isBoolean({}); // $ExpectType boolean
isBoolean(0); // $ExpectType boolean
isBoolean(undefined); // $ExpectType boolean
isBoolean(true); // $ExpectType true
isBoolean(false); // $ExpectType true

declare let x: boolean | string;
if (isBoolean(x)) {
    x; // $ExpectType boolean
} else {
    x; // $ExpectType string
}

fp.isBoolean(null); // $ExpectType boolean
fp.isBoolean([]); // $ExpectType boolean
fp.isBoolean({}); // $ExpectType boolean
fp.isBoolean(0); // $ExpectType boolean
fp.isBoolean(undefined); // $ExpectType boolean
fp.isBoolean(true); // $ExpectType true
fp.isBoolean(false); // $ExpectType true
