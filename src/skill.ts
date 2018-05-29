import * as Alexa from "ask-sdk-core";

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers()
  .lambda();
