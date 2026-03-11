import * as Models from "../../src/models";

describe("model helpers: RecordQueryCondition", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfRecordQueryCondition"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQueryConditionFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["RecordQueryConditionToJSON"]).toBeDefined();
  });
});
