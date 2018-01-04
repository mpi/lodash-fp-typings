import isBuffer from "lodash/fp/isBuffer";
import * as fp from "lodash/fp";
import "node";

isBuffer(new Buffer(1)); // $ExpectType true
isBuffer(null); // $ExpectType boolean
isBuffer([]); // $ExpectType boolean
isBuffer({}); // $ExpectType boolean
isBuffer(0); // $ExpectType boolean
isBuffer(undefined); // $ExpectType boolean
isBuffer(true); // $ExpectType boolean
isBuffer(false); // $ExpectType boolean

declare let x: Buffer | string;
if (isBuffer(x)) {
    x; // $ExpectType Buffer
} else {
    x; // $ExpectType string
}

fp.isBuffer(new Buffer(1)); // $ExpectType true
fp.isBuffer(null); // $ExpectType boolean
fp.isBuffer([]); // $ExpectType boolean
fp.isBuffer({}); // $ExpectType boolean
fp.isBuffer(0); // $ExpectType boolean
fp.isBuffer(undefined); // $ExpectType boolean
fp.isBuffer(true); // $ExpectType boolean
fp.isBuffer(false); // $ExpectType boolean
