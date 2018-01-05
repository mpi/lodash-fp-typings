import isArrayLikeObject from "lodash/fp/isArrayLikeObject";
import * as fp from "lodash/fp";

declare const arr: any[];

isArrayLikeObject(arr); // $ExpectType boolean

if (isArrayLikeObject(arr)) {
    arr; // $ExpectType any[]
} else {
    arr; // $ExpectType never
}

isArrayLikeObject(() => {}); // $ExpectType boolean
isArrayLikeObject("abc"); // $ExpectType boolean

declare const obj: { length: number } | number;

if (isArrayLikeObject(obj)) {
    obj; // $ExpectType { length: number; }
} else {
    obj; // $ExpectType number
}
