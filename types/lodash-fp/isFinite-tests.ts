import isFinite from "lodash/fp/isFinite";
import * as fp from "lodash/fp";

isFinite(Infinity); // $ExpectType boolean
isFinite(1); // $ExpectType boolean
isFinite(Number.MIN_VALUE); // $ExpectType boolean

declare let x: number | string;

fp.isFinite(Infinity); // $ExpectType boolean
fp.isFinite(1); // $ExpectType boolean
fp.isFinite(Number.MIN_VALUE); // $ExpectType boolean
