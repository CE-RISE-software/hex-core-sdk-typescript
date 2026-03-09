import * as Apis from "../../src/apis";

describe("api export: ModelsApi", () => {
  it("is exported", () => {
    expect((Apis as Record<string, unknown>)["ModelsApi"]).toBeDefined();
  });
});
