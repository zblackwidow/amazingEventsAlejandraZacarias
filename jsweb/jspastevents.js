import * as functionCard from "../module/modulo.js";

const urlApi = "https://aulamindhub.github.io/amazing-api/events.json";

let pastEvents = [];

let filterpastEvents = (data) => {
  let currentDate = data.currentDate;
  let pastEvents = data.events.filter((event) => {
    let eventDate = event.date;
    return eventDate < currentDate;
  });
  console.log(pastEvents);
  return pastEvents;
}

let cardContainer = document.getElementById("card");

fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    pastEvents = filterpastEvents(data);
    functionCard.card(pastEvents, cardContainer);
    functionCard.filtrarEventos(pastEvents);
  });

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox =>
  checkbox.addEventListener("change", () => functionCard.filtrarEventos(pastEvents))
);

let search = document.getElementById("search");

search.addEventListener("input", () => functionCard.filtrarEventos(pastEvents));
