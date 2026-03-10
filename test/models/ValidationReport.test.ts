import * as Models from "../../src/models";

describe("model helpers: ValidationReport", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfValidationReport"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidationReportFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ValidationReportToJSON"]).toBeDefined();
  });
});
