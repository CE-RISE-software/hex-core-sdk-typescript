import * as Models from "../../src/models";

describe("model helpers: QueryRequest", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfQueryRequest"]).toBeDefined();
    expect((Models as Record<string, unknown>)["QueryRequestFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["QueryRequestToJSON"]).toBeDefined();
  });
});
