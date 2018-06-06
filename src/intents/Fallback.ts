import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { FALLBACK, HELP } from "../lib/phrases";
import { IntentTypes, RequestTypes } from "../lib/constants";

export const Fallback: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder
      .speak(FALLBACK)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return (
      input.requestEnvelope.request.type === RequestTypes.Intent &&
      input.requestEnvelope.request.intent.name === IntentTypes.Fallback
    );
  }
};
