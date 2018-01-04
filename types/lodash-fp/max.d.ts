declare namespace fp {
  interface Static {
    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    max(array: never[]): undefined;
    max<E>(array: E[]): E;
  }
}

declare const max: typeof fp.max;

declare module 'lodash/fp/max' {
  export default max;
}
