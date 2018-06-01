import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import Api from "../api";
import { TOP } from "../lib/constants";
import { getSlots } from "../lib/helpers";
import { randomSpeakers, listSpeakers, HELP } from "../lib/phrases";

export const TopSpeakers: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const { top } = extractSlots(input);
    const n = parseInt(top.value, 10);
    const topN = isNaN(n) ? TOP : n;
    const speakers = await Api.TopSpeakers(topN);
    const phrases = [randomSpeakers()(topN), speakersReducer(speakers)];
    const speech = phrases.join(" ");

    return input.responseBuilder
      .speak(speech)
      .reprompt(HELP)
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "TopSpeakers";
  }
};
