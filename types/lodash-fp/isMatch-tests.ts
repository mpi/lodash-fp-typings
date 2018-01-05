import isMatch from "lodash/fp/isMatch";
import * as fp from "lodash/fp";

isMatch({}, {}); // $ExpectType boolean
isMatch({})({}); // $ExpectType boolean
isMatch([], []); // $ExpectType boolean
isMatch([])([]); // $ExpectType boolean

const a = {
    a: 1,
    b: true
};

isMatch({a: 1}, a);     // $ExpectType boolean
isMatch({c: 1}, a);     // $ExpectError
isMatch({a: true}, a);  // $ExpectError

isMatch({a: 1})(a);    // $ExpectType boolean
isMatch({a: true})(a); // $ExpectError
isMatch({c: true})(a); // $ExpectError

fp.isMatch(1, 1); // $ExpectType boolean
fp.isMatch({}, {}); // $ExpectType boolean
fp.isMatch({})({}); // $ExpectType boolean
fp.isMatch([], []); // $ExpectType boolean
fp.isMatch([])([]); // $ExpectType boolean
fp.isMatch({a: 1}, a);
