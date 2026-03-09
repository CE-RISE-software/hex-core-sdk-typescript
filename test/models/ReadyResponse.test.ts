import * as Models from "../../src/models";

describe("model export: ReadyResponse", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["ReadyResponse"]).toBeDefined();
  });
});
