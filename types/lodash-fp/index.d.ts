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

/// <reference path="./map.d.ts" />
/// <reference path="./isEmpty.d.ts" />

declare let fp: fp.Static;

// tslint:disable-next-line:no-single-declare-module
declare module "lodash/fp"  {
    export = fp;
}
