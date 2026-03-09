import * as Apis from "../../src/apis";

describe("api export: AdminApi", () => {
  it("is exported", () => {
    expect((Apis as Record<string, unknown>)["AdminApi"]).toBeDefined();
  });
});
