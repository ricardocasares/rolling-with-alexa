import { GraphQLClient } from "graphql-request";

import GQL from "./queries";
import { compose, createError } from "../lib/helpers";
import { API, ErrorTypes } from "../lib/constants";

const client = new GraphQLClient(API);

export async function TopSpeakers(n: number) {
  return client
    .request(GQL.topSpeakers)
    .then(top(n))
    .catch(err => {
      throw createError(err.message, ErrorTypes.RollingApi);
    });
}

export async function UpcomingEvents() {
  return client
    .request(GQL.upcomingEvents)
    .then(extract)
    .catch(err => {
      throw createError(err.message, ErrorTypes.RollingApi);
    });
}

function top(n: number) {
  return compose(limit(n), sort, filter, map, extract);
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

export default { TopSpeakers, UpcomingEvents };
