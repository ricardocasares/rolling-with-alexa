import { skill, ssml } from "./helpers";
import SessionEnded from "../__fixtures__/SessionEndedRequest";

describe("Launch", () => {
  it("should work", async () => {
    const response = await skill(SessionEnded);
    expect(response).toMatchObject(ssml(/please try again/gi));
  });
});
