declare namespace fp {

  interface Static {
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
     * falsey.
     *
     * @param array The array to compact.
     * @return Returns the new array of filtered values.
     */
    compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
  }
}

declare const compact: typeof fp.compact;

declare module "lodash/fp/compact" {
  export default compact;
}