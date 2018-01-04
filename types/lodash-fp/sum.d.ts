declare namespace fp {
  interface Static {
      /**
       * Computes the sum of the values in `array`.
       *
       * @static
       * @memberOf _
       * @since 3.4.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @returns {number} Returns the sum.
       * @example
       *
       * _.sum([4, 2, 8, 6]);
       * // => 20
       */
      sum(array: never[]): 0;
      sum(array: number[]): number;
  }
}

declare const sum: typeof fp.sum;

declare module "lodash/fp/sum" {
  export default sum;
}
