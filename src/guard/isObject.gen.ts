import {Guard, LazyGuard} from "."

export function isObject<KA extends string, VA>(ka: KA, fa: LazyGuard<VA>): Guard<{ [ka in KA]: VA }>
export function isObject<KA extends string, VA, KB extends string, VB>(ka: KA, fa: LazyGuard<VA>, kb: KB, fb: LazyGuard<VB>): Guard<{ [ka in KA]: VA } & { [kb in KB]: VB }>
export function isObject<KA extends string, VA, KB extends string, VB, KC extends string, VC>(ka: KA, fa: LazyGuard<VA>, kb: KB, fb: LazyGuard<VB>, kc: KC, fc: LazyGuard<VC>): Guard<{ [ka in KA]: VA } & { [kb in KB]: VB } & { [kc in KC]: VC }>
export function isObject<KA extends string, VA, KB extends string, VB, KC extends string, VC>(ka?: KA, fa?: LazyGuard<VA>, kb?: KB, fb?: LazyGuard<VB>, kc?: KC, fc?: LazyGuard<VC>) {
  if (kc && fc && kb && fb && ka && fa) {
    return function (x: any): x is ({ [ka in KA]: VA } & { [kb in KB]: VB } & { [kc in KC]: VC }) {
      return typeof x === "object" && fa()(x[ka]) && fb()(x[kb]) && fc()(x[kc])
    }
  } else if (kb && fb && ka && fa) {
    return function (x: any): x is ({ [ka in KA]: VA } & { [kb in KB]: VB }) {
      return typeof x === "object" && fa()(x[ka]) && fb()(x[kb])
    }
  } else if (ka && fa) {
    return function (x: any): x is ({ [ka in KA]: VA }) {
      return typeof x === "object" && fa()(x[ka])
    }
  }
}