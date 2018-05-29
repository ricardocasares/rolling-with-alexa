import { Response, IntentRequest } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import Api from "../api";
import { speakersReducer } from "../lib/helpers";

export const TopSpeakers: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const slots = (input.requestEnvelope.request as IntentRequest).intent.slots;

    let number = parseInt(slots.top.value, 10);
    number = isNaN(number) ? 3 : number;

    const speakers = await Api.TopSpeakers(number);
    const speech = speakersReducer(speakers);

    return input.responseBuilder
      .speak(speech)
      .reprompt("You can ask me about upcoming events or top speakers.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "TopSpeakers";
  }
};
