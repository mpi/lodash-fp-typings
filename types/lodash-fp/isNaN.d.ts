declare namespace fp {
  interface Static {
    /**
     * Checks if value is NaN.
     *
     * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
     *
     * @param value The value to check.
     * @return Returns true if value is NaN, else false.
     */
    isNaN(value?: any): boolean;
  }
}

declare const _isNaN: typeof fp.isNaN;

declare module "lodash/fp/isNaN" {
  export default _isNaN;
}
