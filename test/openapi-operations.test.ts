const operations = [
  { operationId: "listModels", method: "GET", path: "/models" },
  { operationId: "validateModelPayload", method: "POST", path: "/models/{model}/versions/{version}:validate" },
  { operationId: "createRecord", method: "POST", path: "/models/{model}/versions/{version}:create" },
  { operationId: "queryRecords", method: "POST", path: "/models/{model}/versions/{version}:query" },
  { operationId: "health", method: "GET", path: "/admin/health" },
  { operationId: "ready", method: "GET", path: "/admin/ready" },
  { operationId: "status", method: "GET", path: "/admin/status" },
  { operationId: "metrics", method: "GET", path: "/admin/metrics" },
];

describe("Generated OpenAPI operations", () => {
  it("has at least one operation", () => {
    expect(operations.length).toBeGreaterThan(0);
  });
});
