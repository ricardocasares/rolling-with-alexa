import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { randomGoodbye } from "../lib/phrases";
import { RequestTypes, IntentTypes } from "../lib/constants";

export const Stop: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak(randomGoodbye()).getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== RequestTypes.Intent) {
      return false;
    }

    return (
      input.requestEnvelope.request.intent.name === IntentTypes.Stop ||
      input.requestEnvelope.request.intent.name === IntentTypes.Cancel
    );
  }
};
