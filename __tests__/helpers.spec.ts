import { ErrorTypes } from "../src/lib/constants";
import { compose, sanitize, getSlots, createError } from "../src/lib/helpers";
import { HandlerInput } from "ask-sdk-core";

test("compose", () => {
  const composed = compose(
    n => n * n,
    n => n + n
  );

  expect(composed(2)).toEqual(16);
});

test("sanitize", () => {
  const str = "Елена & TypeScript";
  expect(sanitize(str)).toEqual("Elena and TypeScript");
});

test("createError", () => {
  const error = createError();
  const custom = createError("Something happened!", ErrorTypes.RollingApi);

  expect(error).toBeInstanceOf(Error);
  expect(error.name).toEqual("UnknownError");
  expect(error.message).toEqual("The sky is falling");
  expect(custom).toBeInstanceOf(Error);
  expect(custom.name).toEqual("RollingApiError");
  expect(custom.message).toEqual("Something happened!");
});

test("getSlots", () => {
  const inputOk = {
    requestEnvelope: {
      request: {
        type: "IntentRequest",
        intent: {
          name: "Test",
          slots: {}
        }
      }
    }
  };

  const inputError = {
    requestEnvelope: {
      request: {
        type: "NotIntent"
      }
    }
  };

  expect(getSlots(inputOk as HandlerInput)).toMatchObject({});

  expect(() => {
    getSlots(inputError as HandlerInput);
  }).toThrow();
});
