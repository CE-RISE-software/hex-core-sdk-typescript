import * as Models from "../../src/models";

describe("model helpers: ValidationResult", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfValidationResult"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidationResultFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidationResultToJSON"]).toBeDefined();
  });
});
