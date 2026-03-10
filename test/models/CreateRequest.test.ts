import * as Models from "../../src/models";

describe("model helpers: CreateRequest", () => {
  it("exports runtime helper functions", () => {
    expect((Models as Record<string, unknown>)["instanceOfCreateRequest"]).toBeDefined();
    expect((Models as Record<string, unknown>)["CreateRequestFromJSON"]).toBeDefined();
    expect((Models as Record<string, unknown>)["CreateRequestToJSON"]).toBeDefined();
  });
});
