import { Slot } from "ask-sdk-model";
import { HandlerInput } from "ask-sdk-core";
import * as translit from "translitit-cyrillic-russian-to-latin";

import { randomCongrats } from "./phrases";
import { ErrorTypes, RequestTypes } from "./constants";

export function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}

export function sanitize(str) {
  return translit(str.replace("&", "and"));
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
  if (input.requestEnvelope.request.type !== RequestTypes.Intent) {
    throw createError(
      `Request is not ${RequestTypes.Intent}`,
      ErrorTypes.WrongRequestType
    );
  }

  return input.requestEnvelope.request.intent.slots;
}
