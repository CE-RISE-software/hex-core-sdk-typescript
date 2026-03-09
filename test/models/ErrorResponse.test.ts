import * as Models from "../../src/models";

describe("model export: ErrorResponse", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ErrorResponse"]).toBeDefined();
  });
});
