import isEmpty from "lodash/fp/isEmpty";
import * as fp from "lodash/fp";

isEmpty(null); // $ExpectType boolean
isEmpty([]); // $ExpectType boolean
isEmpty({}); // $ExpectType boolean
isEmpty(0); // $ExpectType boolean
isEmpty(undefined); // $ExpectType boolean

isAliasOf(fp.isEmpty, isEmpty); // $ExpectType true

declare function isAliasOf<T>(type: T, alias: T): true;
