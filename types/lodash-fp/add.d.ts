declare namespace fp {

  interface Static {

    /**
     * Adds two numbers.
     *
     * @since 3.4.0
     * @category Math
     * @param {number} addend The second number in an addition.
     * @param {number} augend The first number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * add(6, 4)
     * // => 10
     */
    add(addend: number, augend: number): number;
    add(addend: number): (augend: number) => number;

  }
}

declare const add: typeof fp.add;

declare module "lodash/fp/add" {
  export default add;
}