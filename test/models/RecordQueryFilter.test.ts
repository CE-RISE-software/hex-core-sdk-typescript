import * as Models from "../../src/models";

describe("model helpers: RecordQueryFilter", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfRecordQueryFilter"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQueryFilterFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQueryFilterToJSON"]).toBeDefined();
  });
});
