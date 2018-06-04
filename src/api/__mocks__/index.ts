const speakers = [
  {
    talks: 3,
    name: "Ricardo"
  },
  {
    talks: 19,
    name: "Alexander"
  },
  {
    talks: 9,
    name: "Denis"
  },
  {
    talks: 7,
    name: "Vadzim"
  }
];

export default {
  async TopSpeakers(n: number) {
    return speakers.slice(0, n);
  },

  async UpcomingEvents() {
    return [
      {
        day: "06",
        month: "MAY",
        name: "Rolling Scopes #49"
      },
      {
        day: "06",
        month: "JUNE",
        name: "Rolling Scopes #50"
      }
    ];
  }
};
