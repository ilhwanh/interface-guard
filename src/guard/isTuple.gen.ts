import {Guard, LazyGuard} from "."

export function isTuple<A>(fa: LazyGuard<A>): Guard<[A]>
export function isTuple<A, B>(fa: LazyGuard<A>, fb: LazyGuard<B>): Guard<[A, B]>
export function isTuple<A, B, C>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>): Guard<[A, B, C]>
export function isTuple<A, B, C, D>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>): Guard<[A, B, C, D]>
export function isTuple<A, B, C, D, E>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>): Guard<[A, B, C, D, E]>
export function isTuple<A, B, C, D, E, F>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>): Guard<[A, B, C, D, E, F]>
export function isTuple<A, B, C, D, E, F, G>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>): Guard<[A, B, C, D, E, F, G]>
export function isTuple<A, B, C, D, E, F, G, H>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>): Guard<[A, B, C, D, E, F, G, H]>
export function isTuple<A, B, C, D, E, F, G, H, I>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>): Guard<[A, B, C, D, E, F, G, H, I]>
export function isTuple<A, B, C, D, E, F, G, H, I, J>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>): Guard<[A, B, C, D, E, F, G, H, I, J]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>): Guard<[A, B, C, D, E, F, G, H, I, J, K]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>, fv: LazyGuard<V>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>, fv: LazyGuard<V>, fw: LazyGuard<W>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>, fv: LazyGuard<V>, fw: LazyGuard<W>, fx: LazyGuard<X>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>, fv: LazyGuard<V>, fw: LazyGuard<W>, fx: LazyGuard<X>, fy: LazyGuard<Y>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(fa: LazyGuard<A>, fb: LazyGuard<B>, fc: LazyGuard<C>, fd: LazyGuard<D>, fe: LazyGuard<E>, ff: LazyGuard<F>, fg: LazyGuard<G>, fh: LazyGuard<H>, fi: LazyGuard<I>, fj: LazyGuard<J>, fk: LazyGuard<K>, fl: LazyGuard<L>, fm: LazyGuard<M>, fn: LazyGuard<N>, fo: LazyGuard<O>, fp: LazyGuard<P>, fq: LazyGuard<Q>, fr: LazyGuard<R>, fs: LazyGuard<S>, ft: LazyGuard<T>, fu: LazyGuard<U>, fv: LazyGuard<V>, fw: LazyGuard<W>, fx: LazyGuard<X>, fy: LazyGuard<Y>, fz: LazyGuard<Z>): Guard<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]>
export function isTuple<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(fa?: LazyGuard<A>, fb?: LazyGuard<B>, fc?: LazyGuard<C>, fd?: LazyGuard<D>, fe?: LazyGuard<E>, ff?: LazyGuard<F>, fg?: LazyGuard<G>, fh?: LazyGuard<H>, fi?: LazyGuard<I>, fj?: LazyGuard<J>, fk?: LazyGuard<K>, fl?: LazyGuard<L>, fm?: LazyGuard<M>, fn?: LazyGuard<N>, fo?: LazyGuard<O>, fp?: LazyGuard<P>, fq?: LazyGuard<Q>, fr?: LazyGuard<R>, fs?: LazyGuard<S>, ft?: LazyGuard<T>, fu?: LazyGuard<U>, fv?: LazyGuard<V>, fw?: LazyGuard<W>, fx?: LazyGuard<X>, fy?: LazyGuard<Y>, fz?: LazyGuard<Z>) {
  if (fz && fy && fx && fw && fv && fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x) && fv()(x) && fw()(x) && fx()(x) && fy()(x) && fz()(x)
    }
  } else if (fy && fx && fw && fv && fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x) && fv()(x) && fw()(x) && fx()(x) && fy()(x)
    }
  } else if (fx && fw && fv && fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x) && fv()(x) && fw()(x) && fx()(x)
    }
  } else if (fw && fv && fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x) && fv()(x) && fw()(x)
    }
  } else if (fv && fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x) && fv()(x)
    }
  } else if (fu && ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x) && fu()(x)
    }
  } else if (ft && fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x) && ft()(x)
    }
  } else if (fs && fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x) && fs()(x)
    }
  } else if (fr && fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x) && fr()(x)
    }
  } else if (fq && fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x) && fq()(x)
    }
  } else if (fp && fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x) && fp()(x)
    }
  } else if (fo && fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x) && fo()(x)
    }
  } else if (fn && fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M, N] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x) && fn()(x)
    }
  } else if (fm && fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L, M] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x) && fm()(x)
    }
  } else if (fl && fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K, L] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x) && fl()(x)
    }
  } else if (fk && fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J, K] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x) && fk()(x)
    }
  } else if (fj && fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I, J] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x) && fj()(x)
    }
  } else if (fi && fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H, I] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x) && fi()(x)
    }
  } else if (fh && fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G, H] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x) && fh()(x)
    }
  } else if (fg && ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F, G] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x) && fg()(x)
    }
  } else if (ff && fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E, F] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x) && ff()(x)
    }
  } else if (fe && fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D, E] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x) && fe()(x)
    }
  } else if (fd && fc && fb && fa) {
    return function (x: any): x is [A, B, C, D] {
      return fa()(x) && fb()(x) && fc()(x) && fd()(x)
    }
  } else if (fc && fb && fa) {
    return function (x: any): x is [A, B, C] {
      return fa()(x) && fb()(x) && fc()(x)
    }
  } else if (fb && fa) {
    return function (x: any): x is [A, B] {
      return fa()(x) && fb()(x)
    }
  } else if (fa) {
    return function (x: any): x is [A] {
      return fa()(x)
    }
  }
}