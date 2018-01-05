declare namespace fp {

    interface Static {
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an array-like object, else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        isArrayLikeObject<T>(value: T & string & number): boolean; // should only match if T = any

        isArrayLikeObject<T extends { length: number }>(value: T | string | boolean | number | null | undefined): value is T;

        isArrayLikeObject(value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined | object): value is never;
    }
}

declare const isArrayLikeObject: typeof fp.isArrayLikeObject;

declare module "lodash/fp/isArrayLikeObject" {
    export default isArrayLikeObject;
}
