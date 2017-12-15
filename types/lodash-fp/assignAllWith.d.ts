
type AssignAllCustomizer =
  (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;


declare namespace fp {

  interface Static {

    /**
     * This method is like `_.assignAll` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} object The destination object.
     * @param {Object} [source] The sources objects.
     * @returns {Object} Returns `object`.
     */

    assignAllWith<O>(customizer: AssignAllCustomizer, source: object[], object: O): any & O;
    assignAllWith(customizer: AssignAllCustomizer, source: object[]): <O>(object: O) => any & O;
    assignAllWith(customizer: AssignAllCustomizer): typeof fp.assignAll;

  }
}

declare const assignAllWith: typeof fp.assignAllWith;

declare module "lodash/fp/assignAllWith" {
  export default assignAllWith;
}