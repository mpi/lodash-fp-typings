import property from 'lodash/fp/property';
import * as fp from 'lodash/fp';

const obj = {
  a: 1,
  b: 'a',
  c: {
    d: {
      v: true
    }
  }
};

property('a')(obj); // $ExpectType number
property(['c', 'd'])(obj).v; // $ExpectType boolean
property(['c', 'd', 'v'])(obj); // $ExpectType boolean
