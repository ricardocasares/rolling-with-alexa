import { HandlerInput } from "ask-sdk-core";
import { Slot } from "ask-sdk-model";

export enum ErrorTypes {
  Rolling = "RollingError",
  Unknown = "UnknownError",
  WrongRequestType = "WrongRequestType"
}

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

export function speakersReducer(speakers) {
  return speakers
    .reverse()
    .reduce(
      (speech, { name, talks }, idx) =>
        speech
          .concat(`Number ${speakers.length - idx}: `)
          .concat(`${name} with ${talks} talks. `),
      ""
    );
}

export function eventsReducer(events) {
  return events.reduce(
    (speech, { name, date }, idx) => speech.concat(`${date}: ${name}. `),
    ""
  );
}

export function extractSlots(input: HandlerInput): Record<string, Slot> {
  if (input.requestEnvelope.request.type !== "IntentRequest") {
    throw createError(
      "Request is not IntentRequest",
      ErrorTypes.WrongRequestType
    );
  }

  return input.requestEnvelope.request.intent.slots;
}
