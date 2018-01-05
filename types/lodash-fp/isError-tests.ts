import isError from "lodash/fp/isError";
import * as fp from "lodash/fp";

isError(new Error()); // $ExpectType boolean
isError(null); // $ExpectType boolean
isError([]); // $ExpectType boolean
isError({}); // $ExpectType boolean
isError(0); // $ExpectType boolean
isError(undefined); // $ExpectType boolean
isError(true); // $ExpectType boolean
isError(false); // $ExpectType boolean

declare let x: Error | string;
if (isError(x)) {
    x; // $ExpectType Error
} else {
    x; // $ExpectType string
}

fp.isError(new Error()); // $ExpectType boolean
fp.isError(null); // $ExpectType boolean
fp.isError([]); // $ExpectType boolean
fp.isError({}); // $ExpectType boolean
fp.isError(0); // $ExpectType boolean
fp.isError(undefined); // $ExpectType boolean
fp.isError(true); // $ExpectType boolean
fp.isError(false); // $ExpectType boolean
