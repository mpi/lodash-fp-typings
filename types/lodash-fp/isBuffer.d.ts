declare namespace fp {
    interface Static {
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        isBuffer(value: Buffer): true;
        isBuffer(value: any): value is Buffer;
    }
}

declare const isBuffer: typeof fp.isBuffer;

declare module "lodash/fp/isBuffer" {
    export default isBuffer;
}
