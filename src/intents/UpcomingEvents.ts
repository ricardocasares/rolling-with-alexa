import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const UpcomingEvents: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder
      .speak("Upcoming events intent handler.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "UpcomingEvents";
  }
};
