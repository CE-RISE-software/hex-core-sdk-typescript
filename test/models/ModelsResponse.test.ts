import * as Models from "../../src/models";

describe("model helpers: ModelsResponse", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfModelsResponse"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelsResponseFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["ModelsResponseToJSON"]).toBeDefined();
  });
});
