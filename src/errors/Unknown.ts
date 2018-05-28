import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";

export const Unknown: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    return input.responseBuilder
      .speak("Sorry I have no idea what just happened, please try again!")
      .getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return true;
  }
};
