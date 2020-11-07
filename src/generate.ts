import * as fs from "fs";

const runes = new Array(26).fill(0).map((_, i) => Buffer.from(["A".charCodeAt(0) + i]).toString())

function indent(raw: string, level: number) {
  return " ".repeat(level) + raw.replace(/\n/g, "\n" + " ".repeat(level))
}

function generateIsTupleTypeParameters(numParameter: number) {
  return runes
    .slice(0, numParameter)
    .join(", ");
}

function generateIsTupleFunctionParameters(numParameter: number, optional?: boolean) {
  return runes
    .slice(0, numParameter)
    .map(rune => `f${rune.toLowerCase()}${optional ? "?" : ""}: LazyGuard<${rune}>`)
    .join(", ");
}

function generateIsTupleResult(numParameter: number) {
  const internal = runes
    .slice(0, numParameter)
    .join(", ");
  return `[${internal}]`
}

function generateIsTupleOverloading(numParameter: number, optional?: boolean) {
  const parameterDeclarations = generateIsTupleTypeParameters(numParameter);
  const functionParameters = generateIsTupleFunctionParameters(numParameter, optional);
  const resultingType = generateIsTupleResult(numParameter);
  return `export function isTuple<${parameterDeclarations}>(${functionParameters})${optional ? "" : `: Guard<${resultingType}>`}`
}

function generateIsTupleBodyClause(numParameter: number) {
  const predicate = runes
    .slice(0, numParameter)
    .reverse()
    .map(rune => `f${rune.toLowerCase()}`)
    .join(" && ");
  const result = generateIsTupleResult(numParameter);
  const application = runes
    .slice(0, numParameter)
    .map(rune => `f${rune.toLowerCase()}()(x)`)
    .join(" && ");
  return `if (${predicate}) {
  return function (x: any): x is ${result} {
    return ${application}
  }
}`
}

function generateIsTuple() {
  const signatures = runes
    .map((rune, i) => generateIsTupleOverloading(i + 1))
    .join("\n");
  const functionHead = generateIsTupleOverloading(runes.length, true);
  const body = runes
    .map((_, i) => generateIsTupleBodyClause(runes.length - i))
    .join(" else ");
  return `${signatures}\n${functionHead} {\n${indent(body, 2)}\n}`
}

function generateIsUnionTypeParameters(numParameter: number) {
  return runes
    .slice(0, numParameter)
    .join(", ");
}

function generateIsUnionFunctionParameters(numParameter: number, optional?: boolean) {
  return runes
    .slice(0, numParameter)
    .map(rune => `f${rune.toLowerCase()}${optional ? "?" : ""}: LazyGuard<${rune}>`)
    .join(", ");
}

function generateIsUnionResult(numParameter: number) {
  return runes
    .slice(0, numParameter)
    .join(" | ");
}

function generateIsUnionOverloading(numParameter: number, optional?: boolean) {
  const parameterDeclarations = generateIsUnionTypeParameters(numParameter);
  const functionParameters = generateIsUnionFunctionParameters(numParameter, optional);
  const resultingType = generateIsUnionResult(numParameter);
  return `export function isUnion<${parameterDeclarations}>(${functionParameters})${optional ? "" : `: Guard<${resultingType}>`}`
}

function generateIsUnionBodyClause(numParameter: number) {
  const predicate = runes
    .slice(0, numParameter)
    .reverse()
    .map(rune => `f${rune.toLowerCase()}`)
    .join(" && ");
  const result = generateIsUnionResult(numParameter);
  const application = runes
    .slice(0, numParameter)
    .map(rune => `f${rune.toLowerCase()}()(x)`)
    .join(" && ");
  return `if (${predicate}) {
  return function (x: any): x is (${result}) {
    return ${application}
  }
}`
}

function generateIsUnion() {
  const signatures = runes
    .map((rune, i) => generateIsUnionOverloading(i + 1))
    .join("\n");
  const functionHead = generateIsUnionOverloading(runes.length, true);
  const body = runes
    .map((_, i) => generateIsUnionBodyClause(runes.length - i))
    .join(" else ");
  return `${signatures}\n${functionHead} {\n${indent(body, 2)}\n}`
}

function generateIsObjectTypeParameters(numParameter: number) {
  return runes
    .slice(0, numParameter)
    .map(rune => `K${rune} extends string, V${rune}`)
    .join(", ");
}

function generateIsObjectFunctionParameters(numParameter: number, optional?: boolean) {
  return runes
    .slice(0, numParameter)
    .map(rune => `k${rune.toLowerCase()}${optional ? "?" : ""}: K${rune}, f${rune.toLowerCase()}${optional ? "?" : ""}: LazyGuard<V${rune}>`)
    .join(", ");
}

function generateIsObjectResult(numParameter: number) {
  return runes
    .slice(0, numParameter)
    .map(rune => `{ [k${rune.toLowerCase()} in K${rune}]: V${rune} }`)
    .join(" & ");
}

function generateIsObjectOverloading(numParameter: number, optional?: boolean) {
  const parameterDeclarations = generateIsObjectTypeParameters(numParameter);
  const functionParameters = generateIsObjectFunctionParameters(numParameter, optional);
  const resultingType = generateIsObjectResult(numParameter);
  return `export function isObject<${parameterDeclarations}>(${functionParameters})${optional ? "" : `: Guard<${resultingType}>`}`
}

function generateIsObjectBodyClause(numParameter: number) {
  const predicate = runes
    .slice(0, numParameter)
    .reverse()
    .map(rune => `k${rune.toLowerCase()} && f${rune.toLowerCase()}`)
    .join(" && ");
  const result = generateIsObjectResult(numParameter);
  const application = runes
    .slice(0, numParameter)
    .map(rune => `f${rune.toLowerCase()}()(x[k${rune.toLowerCase()}])`)
    .join(" && ");
  return `if (${predicate}) {
  return function (x: any): x is (${result}) {
    return typeof x === "object" && ${application}
  }
}`
}

function generateIsObject() {
  const signatures = runes
    .map((rune, i) => generateIsObjectOverloading(i + 1))
    .join("\n");
  const functionHead = generateIsObjectOverloading(runes.length, true);
  const body = runes
    .map((_, i) => generateIsObjectBodyClause(runes.length - i))
    .join(" else ");
  return `${signatures}\n${functionHead} {\n${indent(body, 2)}\n}`
}

fs.writeFileSync("src/guard/isTuple.gen.ts", Buffer.from(generateIsTuple()))
fs.writeFileSync("src/guard/isUnion.gen.ts", Buffer.from(generateIsUnion()))
fs.writeFileSync("src/guard/isObject.gen.ts", Buffer.from(generateIsObject()))
