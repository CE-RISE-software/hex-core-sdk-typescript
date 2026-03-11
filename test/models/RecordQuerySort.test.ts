import * as Models from "../../src/models";

describe("model helpers: RecordQuerySort", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfRecordQuerySort"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQuerySortFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQuerySortToJSON"]).toBeDefined();
  });
});
