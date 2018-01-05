declare namespace fp {
  interface Static {
      isError(value: any): value is Error
  }
}

declare const isError: typeof fp.isError;

declare module "lodash/fp/isError" {
  export default isError;
}
