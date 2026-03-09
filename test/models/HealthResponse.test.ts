import * as Models from "../../src/models";

describe("model export: HealthResponse", () => {
  it("is exported", () => {
    expect((Models as Record<string, unknown>)["HealthResponse"]).toBeDefined();
  });
});
