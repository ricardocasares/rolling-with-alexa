import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import Api from "../api";
import { randomSpeakers, HELP } from "../phrases";
import { speakersReducer, extractSlots } from "../helpers";

export const TopSpeakers: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const { top } = extractSlots(input);
    const n = parseInt(top.value, 10);
    const speakers = await Api.TopSpeakers(n);
    const speech = [randomSpeakers()(n), speakersReducer(speakers)].join(" ");

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
