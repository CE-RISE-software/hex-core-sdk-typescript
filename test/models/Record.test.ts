import * as Models from "../../src/models";

describe("model export: Record", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["Record"]).toBeDefined();
  });
});
