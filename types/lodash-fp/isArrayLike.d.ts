declare namespace fp {

  interface Static {
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        isArrayLike<T>(value: T & string & number): boolean; // should only match if T = any

        isArrayLike(value: ((...args: any[]) => any) | Function | null | undefined): value is never;

        isArrayLike(value: any): value is { length: number };
  }
}

declare const isArrayLike: typeof fp.isArrayLike;

declare module "lodash/fp/isArrayLike" {
  export default isArrayLike;
}
