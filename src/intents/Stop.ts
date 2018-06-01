import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { randomGoodbye } from "../lib/phrases";

export const Stop: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak(randomGoodbye()).getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return (
      input.requestEnvelope.request.intent.name === "AMAZON.StopIntent" ||
      input.requestEnvelope.request.intent.name === "AMAZON.CancelIntent"
    );
  }
};
