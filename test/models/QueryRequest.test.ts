import * as Models from "../../src/models";

describe("model export: QueryRequest", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["QueryRequest"]).toBeDefined();
  });
});
