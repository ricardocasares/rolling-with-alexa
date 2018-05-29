import { MONTHS } from "./constants";

export const DRUMS = "https://alexa-fx.analogic.al/drums.mp3";
export const CRICKETS = "https://alexa-fx.analogic.al/crickets.mp3";

export function audio(src) {
  return `<audio src="${src}" />`;
}

export function pause(n) {
  return `<break time="${n}s"/>`;
}

export function interject(str) {
  return `<say-as interpret-as="interjection">${str}</say-as>`;
}

export function date(day, month) {
  return `<say-as interpret-as="date" format="dm">${
    MONTHS[month]
  } ${day}</say-as>`;
}
