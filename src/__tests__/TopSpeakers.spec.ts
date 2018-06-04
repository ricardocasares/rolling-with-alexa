jest.mock("../api");
import { skill, ssml } from "./helpers";
import * as Top from "../__fixtures__/TopSpeakersIntent";

describe("TopSpeakers", () => {
  it("should work without slot", async () => {
    const response = await skill(Top.WithoutTopNumber);
    expect(response).toMatchObject(ssml(/top 3/gi));
  });

  it("should work with number 2", async () => {
    const response = await skill(Top.WithTop2);
    expect(response).toMatchObject(ssml(/top 2/gi));
  });

  it("should work with number 4", async () => {
    const response = await skill(Top.WithTop4);
    expect(response).toMatchObject(ssml(/top 4/gi));
  });
});
