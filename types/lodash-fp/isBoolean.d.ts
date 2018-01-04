declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is classified as a boolean primitive or object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
         * @example
         *
         * _.isBoolean(false);
         * // => true
         *
         * _.isBoolean(null);
         * // => false
         */
        isBoolean(value: boolean): true;
        isBoolean(value: any): value is boolean;
    }
}

declare const isBoolean: typeof fp.isBoolean;

declare module "lodash/fp/isBoolean" {
    export default isBoolean;
}
