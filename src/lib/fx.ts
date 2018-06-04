import { MONTHS } from "./constants";

export function audio(src: string): string {
  return `<audio src="${src}" />`;
}

export function interject(str: string): string {
  return `<say-as interpret-as="interjection">${str}</say-as>`;
}

export function date(day: string, month: string): string {
  return `<say-as interpret-as="date" format="dm">${
    MONTHS[month]
  } ${day}</say-as>`;
}
