import isFunction from "lodash/fp/isFunction";
import * as fp from "lodash/fp";

isFunction(() => {}); // $ExpecetType boolean
isFunction('3'); // $ExpecetType boolean

declare let a: number | (() => void);

if (isFunction(a)) {
    a; // $ExpectType () => void
} else {
    a; // $ExpectType number
}
declare let b: ((x: number, y: string) => number);
if (isFunction(b)) {
    b; // $ExpectType (x: number, y: string) => number
}

fp.isFunction(() => {}); // $ExpecetType boolean
fp.isFunction('3'); // $ExpecetType boolean
