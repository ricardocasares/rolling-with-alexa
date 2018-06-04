import { skill, ssml, makeEvent } from "./helpers";
import * as BuiltIn from "../__fixtures__/BuiltInIntents";

describe("BuiltIn Intents", () => {
  it("should work with Help intent", async () => {
    const response = await skill(BuiltIn.Help);
    expect(response).toMatchObject(ssml(/you can ask me about/gi));
  });

  it("should work with Stop intent", async () => {
    const response = await skill(BuiltIn.Stop);
    expect(response).toMatchObject(ssml(/see you/gi));
  });

  it("should work with Cancel intent", async () => {
    const response = await skill(BuiltIn.Cancel);
    expect(response).toMatchObject(ssml(/see you/gi));
  });
});
