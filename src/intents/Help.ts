import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const Help: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder.speak("Help!").getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return (
      input.requestEnvelope.request.type === "IntentRequest" &&
      input.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  }
};
