export const topSpeakers = `{
  page(url:"https://rollingscopes.com/hall-of-fame.html") {
    query(selector:"ul.hall-of-fame li") {
      name: text(selector:"h3")
      talks: query(selector:".report") {
         name: text(selector:"")
      }
    }
  }
}`;

export const upcomingEvents = `{
  page(url:"https://rollingscopes.com/") {
    query(selector:"ul.event-list li") {
      name: text(selector:"h2:not(.date) a"),
      day: text(selector:"h2.date"),
      month: text(selector:"p.mounth")
    }
  }
}`;

export default { topSpeakers, upcomingEvents };
