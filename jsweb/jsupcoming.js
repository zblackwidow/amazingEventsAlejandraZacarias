import * as functionCard from "../module/modulo.js";

const urlApi = "https://aulamindhub.github.io/amazing-api/events.json";
let futureEvents = [];

let filterFutureEvents = (data) => {
  let currentDate = data.currentDate;
  let futureEvents = data.events.filter((event) => {
    let eventDate = event.date;
    return eventDate > currentDate;
  });
  console.log(futureEvents); // Imprime los eventos futuros
  return futureEvents;
};
let cardContainer = document.getElementById("card");
console.log(cardContainer);

fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    futureEvents = filterFutureEvents(data);
    functionCard.card(futureEvents, cardContainer); // Muestra solo los eventos futuros
    functionCard.filtrarEventos(futureEvents);
  });




document.querySelectorAll('input[type="checkbox"]').forEach(checkbox =>
  checkbox.addEventListener("change", () => functionCard.filtrarEventos(futureEvents))
);

let search = document.getElementById("search");

search.addEventListener("input", () => functionCard.filtrarEventos(futureEvents));
