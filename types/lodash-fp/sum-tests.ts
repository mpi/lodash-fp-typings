import sum from "lodash/fp/sum";
import * as fp from "lodash/fp";

sum([]); // $ExpectType 0
sum([1, 2]); // $ExpectType number

fp.sum([]); // $ExpectType 0
fp.sum([1, 2]); // $ExpectType number
