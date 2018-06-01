import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import Api from "../api";
import { randomEvents, listEvents, HELP } from "../lib/phrases";

export const UpcomingEvents: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const events = await Api.UpcomingEvents();
    const speech = [randomEvents(), listEvents(events)].join(" ");

    return input.responseBuilder
      .speak(speech)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "UpcomingEvents";
  }
};
