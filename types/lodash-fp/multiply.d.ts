declare namespace fp {

  interface Static {

    /**
     * Multiply two numbers.
     *
     * @since 4.7.0
     * @category Math
     * @param {number} multiplicand The second number in a multiplication.
     * @param {number} multiplier The first number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * multiply(6, 4)
     * // => 24
     */
    multiply(multiplicand: number, multiplier: number): number;
    multiply(multiplicand: number): (multiplier: number) => number;

  }
}

declare const multiply: typeof fp.multiply;

declare module "lodash/fp/multiply" {
  export default multiply;
}