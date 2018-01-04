declare namespace fp {
  interface Static {
    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(function(o) { return o.n; }, objects);
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy('n', objects);
     * // => { 'n': 2 }
     */
    maxBy(iteratee: any, array: never[]): undefined;
    maxBy<E>(iteratee: (arg: E) => any, array: E[]): E;
    maxBy<E>(iteratee: (arg: E) => any): (array: E[]) => E;
  }
}

declare const maxBy: typeof fp.maxBy;

declare module 'lodash/fp/maxBy' {
  export default maxBy;
}
