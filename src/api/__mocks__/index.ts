import { ErrorTypes } from "../../lib/constants";
import { createError } from "../../lib/helpers";

const speakers = [
  {
    talks: 10,
    name: "Alexander"
  },
  {
    talks: 5,
    name: "Ricardo"
  },
  {
    talks: 4,
    name: "Denis"
  },
  {
    talks: 1,
    name: "Vadzim"
  }
];

export default {
  async TopSpeakers(n: number) {
    if (n > 5) {
      throw createError("Explode!", ErrorTypes.RollingApi);
    }

    if (n === 0) {
      throw createError("Explode!", ErrorTypes.Unknown);
    }

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
