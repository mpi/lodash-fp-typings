
declare namespace fp {

  interface Static {

    /**
     * This method is like `_.assignIn` except that it accepts multiple
     * sources as an array.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {Object} [sources] The sources objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignInAll([new Foo, new Bar], { 'a': 0 });
     * // => { 'a': 1, 'c': 3 }
     */

    assignInAll<O>(sources: object[], object: O): any & O;
    assignInAll(sources: object[]): <O>(object: O) => any & O;

  }
}

declare const assignInAll: typeof fp.assignInAll;

declare module "lodash/fp/assignInAll" {
  export default assignInAll;
}