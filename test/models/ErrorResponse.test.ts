import * as Models from "../../src/models";

describe("model helpers: ErrorResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfErrorResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ErrorResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ErrorResponseToJSON"]).toBeDefined();
  });
});
