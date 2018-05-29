import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { randomWelcome, HELP } from "../phrases";

export const Launch: RequestHandler = {
  handle(input: HandlerInput): Response {
    const speech = [randomWelcome(), HELP].join(" ");

    return input.responseBuilder
      .speak(speech)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return input.requestEnvelope.request.type === "LaunchRequest";
  }
};
