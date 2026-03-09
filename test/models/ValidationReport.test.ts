import * as Models from "../../src/models";

describe("model export: ValidationReport", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ValidationReport"]).toBeDefined();
  });
});
