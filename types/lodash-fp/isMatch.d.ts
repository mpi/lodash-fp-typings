declare namespace fp {
    interface Static {
        /**
         * Performs a partial deep comparison between `object` and `source` to
         * determine if `object` contains equivalent property values.
         *
         * **Note:** This method is equivalent to `_.matches` when `source` is
         * partially applied.
         *
         * Partial comparisons will match empty array and empty object `source`
         * values against any array or object value, respectively. See `_.isEqual`
         * for a list of supported value comparisons.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {Object} [source] The object of property values to match.
         * @param {Object} [object] The object to inspect.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         *
         * _.isMatch(object, { 'b': 2 });
         * // => true
         *
         * _.isMatch(object, { 'b': 1 });
         * // => false
         */
        isMatch<S, O extends S>(source: S, object: O): boolean;
        isMatch<S>(source: S): <O extends S>(object: O) => boolean;
    }
}

declare const isMatch: typeof fp.isMatch;

declare module "lodash/fp/isMatch" {
    export default isMatch;
}
