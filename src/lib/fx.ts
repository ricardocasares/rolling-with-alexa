import { MONTHS } from "./constants";

export function audio(src) {
  return `<audio src="${src}" />`;
}

export function pause(n: number = 1): string {
  return `<break time="${n}s"/>`;
}

export function interject(str: string): string {
  return `<say-as interpret-as="interjection">${str}</say-as>`;
}

export function date(day: string, month: string): string {
  return `<say-as interpret-as="date" format="dm">${
    MONTHS[month]
  } ${day}</say-as>`;
}
