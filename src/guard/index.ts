export type Guard<A> = (x: any) => x is A;
export type LazyGuard<A> = () => Guard<A>;

export type Guarded<A> = A extends (x: any) => x is infer X ? X : never;

export function isArrayOf<A>(predicate: LazyGuard<A>): Guard<A[]> {
  return function(x: any): x is A[] {
    return Array.isArray(x) && x.map(predicate()).reduce((a, b) => a && b)
  }
}

export function isLike<A>(a: A, fa: (x: A) => x is A): Guard<A> {
  return function(x: any): x is A {
    return fa(x)
  }
}

export function is<A>(a: A): Guard<A> {
  return function(x: any): x is A {
    return a === x
  }
}

export function optional<A>(fa: LazyGuard<A>): Guard<A | undefined> {
  return function(x: any): x is (A | undefined) {
    return typeof x === "undefined" || fa()(x)
  }
}

export function isVariant<A>(type: string): Guard<A> {
  return function(x: any): x is A {
    return typeof x === "object" && x["type"] === type
  }
}
