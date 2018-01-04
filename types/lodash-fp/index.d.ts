// Type definitions for lodash-fp 0.10
// Project: https://github.com/lodash/lodash-fp#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.3

/// <reference path="./add.d.ts" />
/// <reference path="./subtract.d.ts" />
/// <reference path="./multiply.d.ts" />
/// <reference path="./divide.d.ts" />
/// <reference path="./assign.d.ts" />
/// <reference path="./assignWith.d.ts" />
/// <reference path="./assignAll.d.ts" />
/// <reference path="./assignAllWith.d.ts" />
/// <reference path="./assignIn.d.ts" />
/// <reference path="./assignInWith.d.ts" />
/// <reference path="./assignInAll.d.ts" />
/// <reference path="./assignInAllWith.d.ts" />

/// <reference path="./max.d.ts" />
/// <reference path="./maxBy.d.ts" />
/// <reference path="./memoize.d.ts" />
/// <reference path="./pick.d.ts" />
/// <reference path="./property.d.ts" />

/// <reference path="./map.d.ts" />
/// <reference path="./isEmpty.d.ts" />
/// <reference path="./isEqual.d.ts" />

declare let fp: fp.Static;

// tslint:disable-next-line:no-single-declare-module
declare module "lodash/fp"  {
    export = fp;
}
