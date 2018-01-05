declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        isFunction(value: any): value is (...args: any[]) => any;
    }
}

declare const isFunction: typeof fp.isFunction;

declare module "lodash/fp/isFunction" {
    export default isFunction;
}
