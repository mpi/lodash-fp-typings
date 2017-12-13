type Mapper<T, R> = (arg: T) => R;
type List<T> = ArrayLike<T>;


declare namespace fp {

  interface Static {

    map<T, R>(fn: Mapper<T, R>, list: List<T>): R[];
    map<T, K extends keyof T>(property: K, list: List<T>): Array<T[K]>;
    map<T, R>(fn: Mapper<T, R>): (list: List<T>) => R[];
    map<K extends string>(property: K): <V>(list: List<{[x in K]: V}>) => V[];

  }
}

declare const map: typeof fp.map;

declare module "lodash/fp/map" {
  export default map;
}