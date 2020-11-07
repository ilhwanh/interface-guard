export type Guard<A> = (x: any) => x is A;
export type LazyGuard<A> = () => Guard<A>;

export type Guarded<A> = A extends (x: any) => x is infer X ? X : never;

export function isArrayOf<A>(predicate: LazyGuard<A>) {
  return function(x: any): x is A[] {
    return Array.isArray(x) && x.map(predicate()).reduce((a, b) => a && b)
  }
}

export function isLike<A>(a: A, fa: (x: A) => x is A) {
  return function(x: any): x is A {
    return fa(x)
  }
}

export function is<A>(a: A) {
  return function(x: any): x is A {
    return a === x
  }
}


