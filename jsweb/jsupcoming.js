import * as functionCard from "../module/modulo.js"
const urlApi = "https://aulamindhub.github.io/amazing-api/events.json"
let dataEvents = [];
fetch(urlApi)
.then(response => response.json())
.then(data => {
  let dataEvents= data.events 
  functionCard.card(dataEvents,cardContainer)
  functionCard.filtrarEventos(dataEvents)   
})

let cardContainer = document.getElementById("card");

function card(allCard, cardContainer) {
  for (let i = 0; i < allCard.length; i++) {
    functionCard.createCard(cardContainer, allCard[i]);
  }
}

let filterFutureEvents = (data) => {
  let currentDate = new Date(data.currentDate);
  let futureEvents = data.events.filter((event) => {
    let eventDate = new Date(event.date);
    return eventDate > currentDate;
  });
  return futureEvents;
};

let futureEvents = filterFutureEvents(data);

card(futureEvents, cardContainer);

function filtrarPorCategoria() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let categoriasSeleccionadas = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.dataset.category);
    }
  });
  if (categoriasSeleccionadas.length === 0) {
    actualizarDatos(futureEvents);
  } else {
    let eventosFiltrados = futureEvents.filter(function (evento) {
      return categoriasSeleccionadas.includes(evento.category);
    });
    actualizarDatos(eventosFiltrados);
  }
}

function actualizarDatos(eventos) {
  let cardContainer = document.getElementById('card');
  cardContainer.innerHTML = '';
  eventos.forEach(function (evento) {
    functionCard.createCard(cardContainer, evento);
  });
}

document.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
  checkbox.addEventListener('change', filtrarPorCategoria);
});

let search = document.getElementById("search")

search.addEventListener('input', function (e) {
  let searchValue = e.target.value.toLowerCase()
  let cardContainer = document.getElementById('card')
  cardContainer.innerHTML = '';
  data.events.forEach(function (evento) {
    if (evento.name.toLowerCase().includes(searchValue)) {
      functionCard.createCard(cardContainer, evento)
    }
  });
});