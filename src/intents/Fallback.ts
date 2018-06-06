import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const Fallback: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder
      .speak("I don't understand that, try again.")
      .reprompt("You can ask me about upcoming events and top speakers.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return (
      input.requestEnvelope.request.type === "IntentRequest" &&
      input.requestEnvelope.request.intent.name === "AMAZON.FallbackIntent"
    );
  }
};
