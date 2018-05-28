import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

const TopSpeakers: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak("Top speakers").getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return true;
  }
};

export default TopSpeakers;
