declare namespace fp {
  interface Static {
    /**
    * Checks if value is classified as a Map object.
    *
    * @param value The value to check.
    * @returns Returns true if value is correctly classified, else false.
    */
    isMap(value?: any): value is Map<any, any>;
  }
}

declare const isMap: typeof fp.isMap;

declare module "lodash/fp/isMap" {
  export default isMap;
}
