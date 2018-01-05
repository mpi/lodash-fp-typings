declare namespace fp {
  interface Static {
    /**
     * Checks if value is classified as an Array object.
     * @param value The value to check.
     *
     * @return Returns true if value is correctly classified, else false.
     */
    isArray(value?: any): value is any[];
  }
}

declare const isArray: typeof fp.isArray;

declare module "lodash/fp/isArray" {
  export default isArray;
}
