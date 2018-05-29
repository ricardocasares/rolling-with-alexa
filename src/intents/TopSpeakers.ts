import { Response, IntentRequest } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const TopSpeakers: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    const slots = (input.requestEnvelope.request as IntentRequest).intent.slots;

    let number = parseInt(slots.top.value, 10);
    number = isNaN(number) ? 3 : number;

    return input.responseBuilder
      .speak(`You requested the top ${number} speakers.`)
      .reprompt("You can ask me about upcoming events or top speakers.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "TopSpeakers";
  }
};
