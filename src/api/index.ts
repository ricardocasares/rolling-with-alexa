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

export function top(n: number) {
  return compose(
    limit(n),
    sort,
    filter,
    map,
    extract
  );
}

export function extract(data) {
  const { page = {} } = data;
  const { query = [] } = page;

  return query;
}

export function map(data) {
  return data.map(s => ({ ...s, talks: s.talks.length }));
}

export function filter(data) {
  return data.filter(speaker => speaker.talks);
}

export function sort(data) {
  return data.sort((a, b) => b.talks - a.talks);
}

export function limit(n: number) {
  return data => data.slice(0, n);
}

export default { TopSpeakers, UpcomingEvents };
