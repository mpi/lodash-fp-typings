import isNull from "lodash/fp/isNull";
import * as fp from "lodash/fp";

isNull(null); // $ExpectType true
isNull([]); // $ExpectType boolean
isNull({}); // $ExpectType boolean
isNull(0); // $ExpectType boolean
isNull(undefined); // $ExpectType boolean
isNull(true); // $ExpectType boolean
isNull(false); // $ExpectType boolean

declare let x: null | string;
if (isNull(x)) {
    x; // $ExpectType null
} else {
    x; // $ExpectType string
}

fp.isNull(null); // $ExpectType true
fp.isNull([]); // $ExpectType boolean
fp.isNull({}); // $ExpectType boolean
fp.isNull(0); // $ExpectType boolean
fp.isNull(undefined); // $ExpectType boolean
fp.isNull(true); // $ExpectType boolean
fp.isNull(false); // $ExpectType boolean
