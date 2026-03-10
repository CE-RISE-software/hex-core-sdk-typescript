import * as Models from "../../src/models";

describe("model helpers: ValidateRequest", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfValidateRequest"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidateRequestFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidateRequestToJSON"]).toBeDefined();
  });
});
