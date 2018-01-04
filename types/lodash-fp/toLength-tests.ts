import toLength from 'lodash/fp/toLength';
import * as fp from 'lodash/fp';

toLength(1); // $ExpectType number
toLength('1'); // $ExpectType number
toLength('abc'); // $ExpectType number
toLength(true); // $ExpectType number
toLength([]); // $ExpectType number
toLength({}); // $ExpectType number

fp.toLength(1); // $ExpectType number
fp.toLength('1'); // $ExpectType number
fp.toLength('abc'); // $ExpectType number
fp.toLength(true); // $ExpectType number
fp.toLength([]); // $ExpectType number
fp.toLength({}); // $ExpectType number
