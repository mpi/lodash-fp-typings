
declare namespace fp {

  interface Static {

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {Object} [source] The source object.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.c = 3;*
     * }
     *
     * Foo.prototype.b = 2;
     *
     * _.assignIn(new Foo, { 'a': 0 });
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    assignIn<O, S>(source: S, object: O): S & O;
    assignIn<S>(source: S): <O>(object: O) => S & O;

  }
}

declare const assignIn: typeof fp.assignIn;

declare module "lodash/fp/assignIn" {
  export default assignIn;
}