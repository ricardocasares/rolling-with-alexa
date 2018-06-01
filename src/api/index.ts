import { GraphQLClient } from "graphql-request";
import * as translit from "translitit-cyrillic-russian-to-latin";

import GQL from "./queries";
import { date } from "../lib/fx";
import { compose, createError } from "../lib/helpers";
import { API, TOP, MONTHS, ErrorTypes } from "../lib/constants";

const client = new GraphQLClient(API);

export async function TopSpeakers(n: number) {
  return client
    .request(GQL.topSpeakers)
    .then(top(n))
    .catch(err => {
      throw createError(err.message, ErrorTypes.Rolling);
    });
}

export async function UpcomingEvents() {
  return client
    .request(GQL.upcomingEvents)
    .then(compose(latin, format, extract))
    .catch(err => {
      throw createError(err.message, ErrorTypes.Rolling);
    });
}

function top(n: number) {
  return compose(limit(n), sort, latin, filter, map, extract);
}

function extract(data) {
  const { page = {} } = data;
  const { query = [] } = page;

  return query;
}

function map(data) {
  return data.map(s => ({ ...s, talks: s.talks.length }));
}

function filter(data) {
  return data.filter(speaker => speaker.talks);
}

function sort(data) {
  return data.sort((a, b) => b.talks - a.talks);
}

function limit(n: number) {
  return data => data.slice(0, n);
}

function format(data) {
  return data.map(({ name, day, month }) => ({
    name,
    date: date(day, month)
  }));
}

function latin(data) {
  return data.map(({ name, ...rest }) => ({
    ...rest,
    name: translit(name.replace("&", "and"))
  }));
}

export default { TopSpeakers, UpcomingEvents };
