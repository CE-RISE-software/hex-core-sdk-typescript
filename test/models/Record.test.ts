import * as Models from "../../src/models";

describe("model helpers: Record", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfRecord"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordToJSON"]).toBeDefined();
  });
});
