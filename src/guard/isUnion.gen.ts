import {Guard, LazyGuard} from "."

export function isUnion<A>(fa: LazyGuard<A>): Guard<A>
export function isUnion<A, B>(fa: LazyGuard<A>, fb: LazyGuard<B>): Guard<A | B>
export function isUnion<A, B, C>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>): Guard<A | B | C>
export function isUnion<A, B, C>(fa?: LazyGuard<A>, fb?: LazyGuard<B>, fc?: LazyGuard<C>) {
  if (fc && fb && fa) {
    return function (x: any): x is (A | B | C) {
      return fa()(x) && fb()(x) && fc()(x)
    }
  } else if (fb && fa) {
    return function (x: any): x is (A | B) {
      return fa()(x) && fb()(x)
    }
  } else if (fa) {
    return function (x: any): x is (A) {
      return fa()(x)
    }
  }
}