declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is classified as a `Date` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
         * @example
         *
         * _.isDate(new Date);
         * // => true
         *
         * _.isDate('Mon April 23 2012');
         * // => false
         */
        isDate(value: any): value is Date;
    }
}

declare const isDate: typeof fp.isDate;

declare module "lodash/fp/isDate" {
    export default isDate;
}
