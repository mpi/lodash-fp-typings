
type AssignCustomizer =
  (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

declare namespace fp {

  interface Static {

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partial(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    assignWith<O, S>(customizer: AssignCustomizer, source: S, object: O): S & O;
    assignWith<S>(customizer: AssignCustomizer, source: S): <O>(object: O) => S & O;
    assignWith(customizer: AssignCustomizer): typeof fp.assign;
  }
}

declare const assignWith: typeof fp.assignWith;

declare module "lodash/fp/assignWith" {
  export default assignWith;
}