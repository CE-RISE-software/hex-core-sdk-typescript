import * as Apis from "../../src/apis";

describe("api export: DiscoveryApi", () => {
  it("is exported", () => {
    expect((Apis as Record<string, unknown>)["DiscoveryApi"]).toBeDefined();
  });
});
