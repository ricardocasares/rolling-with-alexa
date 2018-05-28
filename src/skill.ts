import * as Alexa from "ask-sdk-core";
import * as Errors from "./errors";
import * as Intents from "./intents";

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    Intents.Help,
    Intents.Stop,
    Intents.Launch,
    Intents.TopSpeakers,
    Intents.UpcomingEvents,
    Intents.SessionEnded
  )
  .addErrorHandlers(Errors.Rolling, Errors.Unknown)
  .lambda();
