import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";

export const Rolling: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    // do your analytics
    console.log(error.message);
    return input.responseBuilder.speak("Rolling Error happened").getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return error.name.startsWith("Rolling");
  }
};
