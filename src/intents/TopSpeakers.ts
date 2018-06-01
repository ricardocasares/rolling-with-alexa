import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

import Api from "../api";
import { TOP, IntentTypes, RequestTypes } from "../lib/constants";
import { getSlots } from "../lib/helpers";
import { randomSpeakers, speakersList, HELP } from "../lib/phrases";

export const TopSpeakers: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const n = getTop(input);
    const speakers = await Api.TopSpeakers(n);
    const prefix = randomSpeakers();
    const speech = [prefix(n), speakersList(speakers)].join(" ");

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
      input.requestEnvelope.request.intent.name === IntentTypes.TopSpeakers
    );
  }
};

function getTop(input): number {
  const { top } = getSlots(input);
  const n = parseInt(top.value, 10);

  return isNaN(n) ? TOP : n;
}
