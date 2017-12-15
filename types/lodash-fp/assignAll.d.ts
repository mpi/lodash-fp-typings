
declare namespace fp {

  interface Static {

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {Object} [source] The sources objects.
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

    assignAll<O>(source: object[], object: O): any & O;
    assignAll<O>(source: object[]): (object: O) => any & O;

    // assignAll<O, S1>(source: [ S1 ], object: O): S1 & O;
    // assignAll<O, S1, S2>(source: [ S1, S2 ], object: O): S1 & S2 & O;
    // assignAll<O, S1, S2, S3>(source: [ S1, S2, S3 ], object: O): S1 & S2 & S3 & O;
    // assignAll<O, S1, S2, S3, S4>(source: [ S1, S1, S2, S3, S4 ], object: O): S1 & S2 & S3 & S4 & O;
    // assignAll<O>(source: any[], object: O): O;

    // assignAll<O, S1>(source: [S1]): (object: O) => S1 & O;
    // assignAll<O, S1, S2>(source: [S1, S2]): (object: O) => S1 & S2 & O;
    // assignAll<O, S1, S2, S3>(source: [S1, S2, S3]): (object: O) => S1 & S2 & S3 & O;
    // assignAll<O, S1, S2, S3, S4>(source: [S1, S1, S2, S3, S4]): (object: O) => S1 & S2 & S3 & S4 & O;
    // assignAll<O>(source: any[]): (object: O) => O;

  }
}

declare const assignAll: typeof fp.assignAll;

declare module "lodash/fp/assignAll" {
  export default assignAll;
}