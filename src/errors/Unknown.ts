import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";
import { randomError } from "../lib/phrases";

export const Unknown: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    // do your analytics
    console.log(error.message);
    return input.responseBuilder.speak(randomError()).getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return true;
  }
};
