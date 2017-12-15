
type AssignInCustomizer =
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
    assignInWith<O, S>(customizer: AssignInCustomizer, source: S, object: O): S & O;
    assignInWith<S>(customizer: AssignInCustomizer, source: S): <O>(object: O) => S & O;
    assignInWith(customizer: AssignInCustomizer): typeof fp.assignIn;
  }
}

declare const assignInWith: typeof fp.assignInWith;

declare module "lodash/fp/assignInWith" {
  export default assignInWith;
}