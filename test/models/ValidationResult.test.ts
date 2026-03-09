import * as Models from "../../src/models";

describe("model export: ValidationResult", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ValidationResult"]).toBeDefined();
  });
});
