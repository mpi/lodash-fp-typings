import pick from 'lodash/fp/pick';
import * as fp from 'lodash/fp';

const obj = { a: 1, b: 2, c: '3' };

pick('a', obj); // $ExpectType { a: number; }
pick('a')(obj); // $ExpectType { a: number; }
pick(['a', 'c'], obj); // $ExpectType { a: number; c: string; }
pick(['a', 'c'])(obj); // $ExpectType { a: number; c: string; }
