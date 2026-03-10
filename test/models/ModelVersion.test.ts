import * as Models from "../../src/models";

describe("model helpers: ModelVersion", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfModelVersion"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelVersionFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelVersionToJSON"]).toBeDefined();
  });
});
