declare namespace fp {
  interface Static {
    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @param {Object} [object] object The source object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(['a', 'c'], object);
     * // => { 'a': 1, 'c': 3 }
     */

    pick<P extends keyof O, O>(paths: P, object: O): { [K in P]: O[K] };
    pick<P extends string>(paths: P): <R>(object: { [key in P]: R} ) => { [key in P]: R };

    pick<P extends keyof O, O>(paths: P[], object: O): { [K in P]: O[K] };
    pick<P extends string>(paths: P[]): <O extends { [K in P] }>(object: O) => { [X in P]: O[X] };
  }
}

declare const pick: typeof fp.pick;

declare module 'lodash/fp/pick' {
  export default pick;
}

