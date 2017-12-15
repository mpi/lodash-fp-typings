import assign from 'lodash/fp/assign';
import * as fp from 'lodash/fp';

const source = { a: 1 };
const object = { b: '1' };

assign(source, object); // $ExpectType { a: number; } & { b: string; }
assign(source)(object); // $ExpectType { a: number; } & { b: string; }
assign(source); // $ExpectType <O>(object: O) => { a: number; } & O

// TODO: enhance typing
// const sourceOverride = { b: 1 };
// assign(sourceOverride, object); // $ExpectType { b: number; }

isAliasOf(fp.assign, assign); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
