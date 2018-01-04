declare namespace fp {
  // "e". yay!

  interface Static {
    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    property<P extends string>(path: P): <R>(object: { [K in P]: R }) => R;
    property<P1 extends string, P2 extends string>(path: [P1, P2]):
      <R>(object: { [k1 in P1]: { [k2 in P2]: R } }) => R;
    property<P1 extends string, P2 extends string, P3 extends string>(path: [P1, P2, P3]):
      <R>(object: { [k1 in P1]: { [k2 in P2]: { [k3 in P3]: R } } }) => R;
  }
}

declare const property: typeof fp.property;

declare module 'lodash/fp/property' {
  export default property;
}
