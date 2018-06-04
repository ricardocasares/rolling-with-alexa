import { skill, ssml } from "./helpers";
import Launch from "../__fixtures__/LaunchRequest";

describe("Launch", () => {
  it("should work", async () => {
    const response = await skill(Launch);
    expect(response).toMatchObject(ssml(/you can ask me about/gi));
  });
});
