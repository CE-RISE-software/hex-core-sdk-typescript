import * as Models from "../../src/models";

describe("model export: CreateRequest", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["CreateRequest"]).toBeDefined();
  });
});
