import { MONTHS } from "./constants";

export function date(day, month) {
  return `<say-as interpret-as="date" format="dm">${
    MONTHS[month]
  } ${day}</say-as>`;
}
