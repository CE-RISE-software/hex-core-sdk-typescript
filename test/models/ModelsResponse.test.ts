import * as Models from "../../src/models";

describe("model export: ModelsResponse", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ModelsResponse"]).toBeDefined();
  });
});
