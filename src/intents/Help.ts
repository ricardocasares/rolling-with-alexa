import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { HELP } from "../lib/phrases";

export const Help: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak(HELP).getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return (
      input.requestEnvelope.request.type === "IntentRequest" &&
      input.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  }
};
