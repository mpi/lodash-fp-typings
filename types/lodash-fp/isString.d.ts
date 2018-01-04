declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a string, else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        isString(value: String): true;
        isString(value: any): value is String;
    }
}

declare const isString: typeof fp.isString;

declare module "lodash/fp/isString" {
    export default isString;
}
