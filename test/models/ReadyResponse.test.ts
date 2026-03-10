import * as Models from "../../src/models";

describe("model helpers: ReadyResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfReadyResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ReadyResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ReadyResponseToJSON"]).toBeDefined();
  });
});
