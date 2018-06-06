jest.mock("../src/api");
import { skill, ssml } from "./helpers";
import * as Top from "../__fixtures__/TopSpeakersIntent";

describe("TopSpeakers", () => {
  it("should catch Rolling API errors", async () => {
    const response = await skill(Top.WithTop6);
    expect(response).toMatchObject(ssml(/rolling/gi));
  });

  it("should catch Uknown errors", async () => {
    const response = await skill(Top.WithTopZero);
    expect(response).toMatchObject(ssml(/try again/gi));
  });
});
