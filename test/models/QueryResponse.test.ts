import * as Models from "../../src/models";

describe("model export: QueryResponse", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["QueryResponse"]).toBeDefined();
  });
});
