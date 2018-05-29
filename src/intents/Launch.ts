import { Response } from "ask-sdk-model";
import { HandlerInput, RequestHandler } from "ask-sdk-core";

export const Launch: RequestHandler = {
  handle(input: HandlerInput): Response {
    return input.responseBuilder
      .speak(
        "Welcome to Rolling Scopes, you can ask me about upcoming events and top speakers."
      )
      .reprompt("You can ask me about upcoming events and top speakers.")
      .getResponse();
  },

  canHandle(input: HandlerInput): boolean {
    return input.requestEnvelope.request.type === "LaunchRequest";
  }
};
