import * as Models from "../../src/models";

describe("model helpers: QueryResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfQueryResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["QueryResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["QueryResponseToJSON"]).toBeDefined();
  });
});
