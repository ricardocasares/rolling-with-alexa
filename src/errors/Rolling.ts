import { Response } from "ask-sdk-model";
import { HandlerInput, ErrorHandler } from "ask-sdk-core";

import { ErrorTypes } from "../lib/constants";
import { randomRollingError } from "../lib/phrases";

export const Rolling: ErrorHandler = {
  handle(input: HandlerInput, error: Error): Response {
    // do your analytics
    console.log(error.message);
    return input.responseBuilder.speak(randomRollingError()).getResponse();
  },

  canHandle(input: HandlerInput, error: Error): boolean {
    return error.name === ErrorTypes.RollingApi;
  }
};
