import { Slot } from "ask-sdk-model";
import { HandlerInput } from "ask-sdk-core";

import { ErrorTypes } from "./constants";
import { randomCongrats } from "./phrases";

export function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}

export function createError(
  msg = "The sky is falling",
  type = ErrorTypes.Unknown
): Error {
  const error = new Error(msg);
  error.name = type;

  return error;
}

export function getSlots(input: HandlerInput): Record<string, Slot> {
  if (input.requestEnvelope.request.type !== "IntentRequest") {
    throw createError(
      "Request is not IntentRequest",
      ErrorTypes.WrongRequestType
    );
  }

  return input.requestEnvelope.request.intent.slots;
}
