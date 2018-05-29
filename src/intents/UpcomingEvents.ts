import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const UpcomingEvents: RequestHandler = {
  async handle(input: HandlerInput): Promise<Response> {
    return input.responseBuilder
      .speak("The upcoming events are: placeholder!")
      .reprompt("You can ask me about upcoming events or top speakers.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    if (input.requestEnvelope.request.type !== "IntentRequest") return false;

    return input.requestEnvelope.request.intent.name === "UpcomingEvents";
  }
};
