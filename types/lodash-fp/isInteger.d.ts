declare namespace fp {
  interface Static {
    /**
      * Checks if `value` is an integer.
      *
      * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
      *
      * @category Lang
      * @param value The value to check.
      * @returns Returns `true` if `value` is an integer, else `false`.
      * @example
      *
      * _.isInteger(3);
      * // => true
      *
      * _.isInteger(Number.MIN_VALUE);
      * // => false
      *
      * _.isInteger(Infinity);
      * // => false
      *
      * _.isInteger('3');
      * // => false
      */
    isInteger(value?: any): value is number;
  }
}

declare const isInteger: typeof fp.isInteger;

declare module "lodash/fp/isInteger" {
  export default isInteger;
}
