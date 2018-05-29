import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { randomEvents, HELP } from "../lib/phrases";
import { eventsReducer } from "../lib/helpers";
import Api from "../api";

export const UpcomingEvents: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const events = await Api.UpcomingEvents();
    const speech = [randomEvents(), eventsReducer(events)].join(" ");

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
