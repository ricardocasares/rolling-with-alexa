import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";

export const Rolling: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    return input.responseBuilder
      .speak("Oh no! There was a rolling error, please try again!")
      .getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return error.name.startsWith("Rolling");
  }
};
