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

let pastEvents = filterPastEvents(data);

card(pastEvents, cardContainer);

function card(allCard, cardContainer) {
  for (let i = 0; i < allCard.length; i++) {
    functionCard.createCard(cardContainer, allCard[i]);
  }
}

let filterPastEvents = (data) => {
  let currentDate = new Date(data.currentDate);
  let pastEvents = data.events.filter((event) => {
    let eventDate = new Date(event.date);
    return eventDate < currentDate;
  });
  return pastEvents;
};

function filtrarPorCategoria() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let categoriasSeleccionadas = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.dataset.category);
    }
  });
  if (categoriasSeleccionadas.length === 0) {
    actualizarDatos(pastEvents);
  } else {
    let eventosFiltrados = pastEvents.filter(function (evento) {
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
