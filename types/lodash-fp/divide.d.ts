declare namespace fp {

  interface Static {

    /**
     * Divide two numbers.
     *
     * @since 4.7.0
     * @category Math
     * @param {number} divisor The second number in a division.
     * @param {number} dividend The first number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * divide(4, 6)
     * // => 1.5
     */
    divide(divisor: number, dividend: number): number;
    divide(divisor: number): (dividend: number) => number;

  }
}

declare const divide: typeof fp.divide;

declare module "lodash/fp/divide" {
  export default divide;
}