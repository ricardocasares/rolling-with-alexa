import Api, { map, sort, filter, limit, extract } from "../src/api";

test("UpcomingEvents", async () => {
  const events = await Api.UpcomingEvents();
  expect(events).toBeInstanceOf(Array);
});

test("TopSpeakers", async () => {
  const events = await Api.TopSpeakers(3);
  expect(events).toBeInstanceOf(Array);
});

test("map", () => {
  const speakers = map([{ talks: [1, 2], name: "Ricardo" }]);
  expect(speakers).toBeInstanceOf(Array);
  expect(speakers[0]).toHaveProperty("talks");
  expect(speakers[0].talks).toEqual(2);
});

test("sort", () => {
  const speakers = sort([
    { talks: 1, name: "Ricardo" },
    { talks: 2, name: "Alexander" }
  ]);

  expect(speakers).toBeInstanceOf(Array);
  expect(speakers[0].name).toEqual("Alexander");
  expect(speakers[1].name).toEqual("Ricardo");
});

test("filter", () => {
  const speakers = filter([
    { name: "Ricardo" },
    { talks: 2, name: "Alexander" }
  ]);

  expect(speakers).toBeInstanceOf(Array);
  expect(speakers[0].name).toEqual("Alexander");
  expect(speakers[1]).toBeUndefined();
});

test("limit", () => {
  const one = limit(1);
  const speakers = one([
    { talks: 1, name: "Ricardo" },
    { talks: 2, name: "Alexander" }
  ]);

  expect(speakers).toBeInstanceOf(Array);
  expect(speakers[0].name).toEqual("Ricardo");
  expect(speakers[1]).toBeUndefined();
});

test("extract", () => {
  const data = extract({ page: { query: [1, 2] } });

  expect(data).toBeInstanceOf(Array);
  expect(data.length).toEqual(2);
});
