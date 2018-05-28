import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

const UpcomingEvents: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak("Upcoming events").getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return true;
  }
};

export default UpcomingEvents;
