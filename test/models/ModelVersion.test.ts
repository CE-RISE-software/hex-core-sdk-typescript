import * as Models from "../../src/models";

describe("model export: ModelVersion", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ModelVersion"]).toBeDefined();
  });
});
