import * as Models from "../../src/models";

describe("model helpers: ModelCountResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfModelCountResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelCountResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelCountResponseToJSON"]).toBeDefined();
  });
});
