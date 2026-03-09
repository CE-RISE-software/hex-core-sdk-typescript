import * as Models from "../../src/models";

describe("model export: ValidateRequest", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ValidateRequest"]).toBeDefined();
  });
});
