import map from 'lodash/fp/map';
import * as fp from 'lodash/fp';

const numbers = ['1', '2', '3'];
const objects = [{ prop: 1 }, { prop: 2 }];

map(Number, numbers); // $ExpectType number[]
map(Number);          // $ExpectType (list: ArrayLike<any>) => number[]
map((x) => x.prop, objects); // $ExpectType number[]
map('prop', objects); // $ExpectType number[]
map('prop');  // $ExpectType <V>(list: ArrayLike<{ prop: V; }>) => V[]
map('prop')(objects); // $ExpectType number[]

fp.map(Number, numbers); // $ExpectType number[]
fp.map(Number);          // $ExpectType (list: ArrayLike<any>) => number[]
fp.map((x) => x.prop, objects); // $ExpectType number[]
fp.map('prop', objects); // $ExpectType number[]
fp.map('prop');  // $ExpectType <V>(list: ArrayLike<{ prop: V; }>) => V[]
fp.map('prop')(objects); // $ExpectType number[]

isAliasOf(map, fp.map); // $ExpectType true

declare function isAliasOf<T>(type: T, ...aliases: T[]): true;
