jest.mock("../src/api");
import { skill, ssml } from "./helpers";
import UpcomingEvents from "../__fixtures__/UpcomingEventsIntent";

describe("TopSpeakers", () => {
  it("should work", async () => {
    const response = await skill(UpcomingEvents);
    expect(response).toMatchObject(ssml(/#49/gi));
    expect(response).toMatchObject(ssml(/#50/gi));
    expect(response).toMatchObject(ssml(/May 06/gi));
    expect(response).toMatchObject(ssml(/June 06/gi));
  });
});
