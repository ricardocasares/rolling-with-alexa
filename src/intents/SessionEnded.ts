import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const SessionEnded: RequestHandler = {
  handle(input: HandlerInput): Response {
    // Any clean/tear-down logic goes here
    return input.responseBuilder.speak("Session was ended.").getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return input.requestEnvelope.request.type === "SessionEndedRequest";
  }
};
