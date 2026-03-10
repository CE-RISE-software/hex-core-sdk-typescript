import * as Models from "../../src/models";

describe("model helpers: HealthResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfHealthResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["HealthResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["HealthResponseToJSON"]).toBeDefined();
  });
});
