import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { HELP } from "../lib/phrases";
import { IntentTypes, RequestTypes } from "../lib/constants";

export const Help: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak(HELP).getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return (
      input.requestEnvelope.request.type === RequestTypes.Intent &&
      input.requestEnvelope.request.intent.name === IntentTypes.Help
    );
  }
};
