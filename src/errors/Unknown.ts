import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";

export const Unknown: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    // do your analytics
    console.log(error.message);
    return input.responseBuilder.speak("Some error happened").getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return true;
  }
};
