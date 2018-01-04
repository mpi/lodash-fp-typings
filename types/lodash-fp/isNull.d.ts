declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(void 0);
         * // => false
         */
        isNull(value: null): true;
        isNull(value: any): value is null;
    }
}

declare const isNull: typeof fp.isNull;

declare module "lodash/fp/isNull" {
    export default isNull;
}
