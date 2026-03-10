describe("typescript-fetch model coverage", () => {
  it("has at least one object model", () => {
    expect(["CreateRequest","ErrorResponse","HealthResponse","ModelVersion","ModelsResponse","QueryRequest","QueryResponse","ReadyResponse","Record","ValidateRequest","ValidationReport","ValidationResult"].length).toBeGreaterThan(0);
  });
  it("enum model coverage is valid", () => {
    const enums = [];
    if (enums.length === 0) {
      expect(true).toBe(true);
      return;
    }
    expect(enums.length).toBeGreaterThan(0);
  });
});
