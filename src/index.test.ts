import {expect} from "chai";
import {isArrayOf, isNumber, isObject, optional} from ".";

describe("recursive", () => {
  it("tree", () => {
    const isTree = isObject(
      "value" as const,
      () => isNumber,
      "left" as const,
      () => optional(() => isTree),
      "right" as const,
      () => optional(() => isTree),
    );

    const a = {
      value: 1,
    };

    expect(isTree(a)).to.equal(true);

    const b = {
      value: 1,
      left: {
        value: 2,
      },
    };

    expect(isTree(b)).to.equal(true);

    const c = {
      left: {
        value: 2,
      },
    };

    expect(isTree(c)).to.equal(false);
  });
})
