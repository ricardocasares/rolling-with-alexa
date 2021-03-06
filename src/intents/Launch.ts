import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import { RequestTypes } from "../lib/constants";
import { randomWelcome, HELP } from "../lib/phrases";

export const Launch: RequestHandler = {
  handle(input: HandlerInput): Response {
    const speech = [randomWelcome(), HELP].join(" ");

    return input.responseBuilder
      .speak(speech)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return input.requestEnvelope.request.type === RequestTypes.Launch;
  }
};
