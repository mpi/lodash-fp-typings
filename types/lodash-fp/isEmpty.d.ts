declare namespace fp {

  interface Static {
    isEmpty(obj: any): boolean;
  }

}

declare module 'lodash/fp/isEmpty' {
  export = fp;
}