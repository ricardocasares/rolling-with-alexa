import * as random from "unique-random-array";

import { audio, interject, DRUMS } from "./fx";

export const WELCOME = [
  "Welcome to the Rolling Scopes!",
  `${interject("bonjour")}, nice to see you again!`,
  `${interject("ta da")}, welcome to the Rolling Scopes!`,
  `${interject("dun dun dun")}, welcome to the Rolling Scopes!`,
  `${interject("bada bing bada boom")}, welcome to the Rolling Scopes!`
];

export const EVENTS = [
  `${interject("gotcha")}, next events are:`,
  `${interject("all righty")}, upcoming events on Rolling Scopes:`,
  `${interject("mamma mia")}, the next Rolling Scopes events:`,
  `${interject("okey dokey")}, coming next on the Rolling Scopes:`
];

export const SPEAKERS = [
  n =>
    `${interject("dun dun dun")}, and the top ${n} speakers are: ${audio(
      DRUMS
    )}`,
  n => `${interject("all righty")}, the top ${n} speakers are:`,
  n => `Sure, here are the top ${n} speakers:`
];

export const CONGRATS = [
  interject("wow"),
  interject("bravo"),
  interject("oh my"),
  interject("hurray"),
  interject("oh la la"),
  interject("well done")
];

export const GOODBYE = [
  `${interject("au revoir")}, see you at the next conference!`,
  `${interject("arrivederci")}, see you at the next conference!`,
  `See you at the next conference, ${interject("bon voyage")}!`
];

export const ERRORS = [
  `${interject("uh oh")}, something broke, please try again!`,
  `${interject("shucks")}, something weird just happened, please try again!`,
  `${interject("good grief")}, something weird just happened, please try again!`
];

export const ROLLING_ERRORS = [
  `${interject(
    "uh oh"
  )}, we messed up, Rolling Scopes is not working properly right now, try again in a moment!`,
  `${interject(
    "uh oh"
  )}, Rolling Scopes is not working properly, we are investigating, try again later!`
];

export const HELP = "You can ask me about upcoming events or top speakers.";

export function listSpeakers(speakers) {
  return speakers.reverse().reduce(speakersReducer(speakers), "");
}

function speakersReducer(speakers) {
  const n = speakers.length;

  return (speech, { name, talks }, idx) =>
    speech
      .concat(`Number ${n - idx}: `)
      .concat(`${name} with ${talks} talks. ${randomCongrats()}. `);
}

export function listEvents(events) {
  return events.reduce(eventsReducer, "");
}

function eventsReducer(speech, { name, date }) {
  return speech.concat(`${date}: ${name}. `);
}

export const randomError = random(ERRORS);
export const randomEvents = random(EVENTS);
export const randomWelcome = random(WELCOME);
export const randomGoodbye = random(GOODBYE);
export const randomSpeakers = random(SPEAKERS);
export const randomCongrats = random(CONGRATS);
export const randomRollingError = random(ROLLING_ERRORS);
