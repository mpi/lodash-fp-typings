declare namespace fp {
    interface Static {
        /**
         * Checks if value is classified as a Number primitive or object.
         *
         * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isNumber(value?: any): value is number;
    }
}

declare const isNumber: typeof fp.isNumber;

declare module "lodash/fp/isNumber" {
    export default isNumber;
}
