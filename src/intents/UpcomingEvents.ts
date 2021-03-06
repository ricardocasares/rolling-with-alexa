import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import Api from "../api";
import { randomEvents, eventsList, HELP } from "../lib/phrases";
import { RequestTypes, IntentTypes } from "../lib/constants";

export const UpcomingEvents: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const events = await Api.UpcomingEvents();
    const speech = [randomEvents(), eventsList(events)].join(" ");

    return input.responseBuilder
      .speak(speech)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== RequestTypes.Intent) {
      return false;
    }

    return (
      input.requestEnvelope.request.intent.name === IntentTypes.UpcomingEvents
    );
  }
};
