import * as Alexa from "ask-sdk-core";
import * as Intents from "./intents";

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    Intents.Help,
    Intents.Stop,
    Intents.Launch,
    Intents.Fallback,
    Intents.TopSpeakers,
    Intents.UpcomingEvents,
    Intents.SessionEnded
  )
  .lambda();
