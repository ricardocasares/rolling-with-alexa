export const TOP = 3;
export const API = "http://gdom.graphene-python.org/graphql";
export const MONTHS = {
  JAN: "January",
  FEB: "February",
  MAR: "March",
  APR: "April",
  MAY: "May",
  JUNE: "June",
  JUL: "July",
  AUG: "August",
  SEPT: "September",
  OCT: "October",
  NOV: "November",
  DEC: "December"
};

export enum ErrorTypes {
  Unknown = "UnknownError",
  RollingApi = "RollingApiError",
  WrongRequestType = "WrongRequestType"
}

export enum RequestTypes {
  Launch = "LaunchRequest",
  Intent = "IntentRequest",
  SessionEnded = "SessionEndedRequest"
}

export enum IntentTypes {
  Help = "AMAZON.HelpIntent",
  Stop = "AMAZON.StopIntent",
  Cancel = "AMAZON.CancelIntent",
  Fallback = "AMAZON.FallbackIntent",
  TopSpeakers = "TopSpeakers",
  UpcomingEvents = "UpcomingEvents"
}
