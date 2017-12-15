
declare namespace fp {

  interface Static {

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Sources objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {Object} source The sources object.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.c = 3;*
     * }
     *
     * Foo.prototype.b = 2;
     *
     * _.assign(new Foo, { 'a': 0 });
     * // => { 'a': 1, 'c': 3 }
     */
    assign<O, S>(source: S, object: O): S & O;
    assign<S>(source: S): <O>(object: O) => S & O;

  }
}

declare const assign: typeof fp.assign;

declare module "lodash/fp/assign" {
  export default assign;
}