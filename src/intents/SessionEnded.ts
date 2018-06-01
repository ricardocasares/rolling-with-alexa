import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { randomError } from "../lib/phrases";

export const SessionEnded: RequestHandler = {
  handle(input: HandlerInput): Response {
    // Any clean/tear-down logic goes here
    return input.responseBuilder.speak(randomError()).getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return input.requestEnvelope.request.type === "SessionEndedRequest";
  }
};
