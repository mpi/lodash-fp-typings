import isArray from "lodash/fp/isArray";
import * as fp from "lodash/fp";

declare const arr: any[] | number | string;

isArray(arr); // $ExpectType boolean
isArray(); // $ExpectType boolean

if (isArray(arr)) {
    arr; // $ExpectType any[]
} else {
    arr; // $ExpectType string | number
}
