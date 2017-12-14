declare namespace fp {

  interface Static {

    /**
     * Subtract two numbers.
     *
     * @since 4.0.0
     * @category Math
     * @param {number} subtrahend The second number in a subtraction.
     * @param {number} minuend The first number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * subtract(4, 6)
     * // => 2
     */
    subtract(subtrahend: number, minuend: number): number;
    subtract(subtrahend: number): (minuend: number) => number;

  }
}

declare const subtract: typeof fp.subtract;

declare module "lodash/fp/subtract" {
  export default subtract;
}