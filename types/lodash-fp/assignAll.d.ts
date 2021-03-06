
declare namespace fp {

  interface Static {

    /**
     * This method is like `_.assign` except that it accepts multiple
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
     * _.assignAll([new Foo, new Bar], { 'a': 0 });
     * // => { 'a': 1, 'c': 3 }
     */

    assignAll<O>(sources: object[], object: O): any & O;
    assignAll(sources: object[]): <O>(object: O) => any & O;

  }
}

declare const assignAll: typeof fp.assignAll;

declare module "lodash/fp/assignAll" {
  export default assignAll;
}