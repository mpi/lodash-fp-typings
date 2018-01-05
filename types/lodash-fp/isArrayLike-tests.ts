import isArrayLike from "lodash/fp/isArrayLike";
import * as fp from "lodash/fp";

isArrayLike([]); // $ExpectType boolean
isArrayLike('0'); // $ExpectType boolean
isArrayLike(() => {}); // $ExpectType boolean

declare const arr: any[] | string | { length: number } | number;

if (isArrayLike(arr)) {
    arr; // $ExpectType string | any[] | { length: number; }
} else {
    arr; // $ExpectType number
}
