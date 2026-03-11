import * as Models from "../../src/models";

describe("model helpers: VersionResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfVersionResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["VersionResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["VersionResponseToJSON"]).toBeDefined();
  });
});
