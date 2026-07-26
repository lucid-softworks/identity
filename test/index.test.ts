import { describe, expect, expectTypeOf, it } from "vitest";

import { identity } from "../src/index.js";

describe("identity", () => {
  it("returns the same primitive or object", () => {
    const object = {};
    expect(identity(42)).toBe(42);
    expect(identity(object)).toBe(object);
  });

  it("preserves literal types", () => {
    expectTypeOf(identity("ready" as const)).toEqualTypeOf<"ready">();
  });
});
