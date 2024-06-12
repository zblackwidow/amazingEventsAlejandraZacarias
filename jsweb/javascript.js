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

let cardContainer = document.getElementById("card")

document.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
  checkbox.addEventListener('change', functionCard.filtrarEventos(dataEvents,cardContainer));
});

let search = document.getElementById("search")

search.addEventListener('input', function (e) {
  let searchValue = e.target.value.toLowerCase()
  let cardContainer = document.getElementById('card')
  cardContainer.innerHTML = '';
  dataEvents.forEach(function (evento) {
    if (evento.name.toLowerCase().includes(searchValue)) {
      functionCard.createCard(cardContainer, evento)
    }
  });
});

document.getElementById('search').addEventListener('input', functionCard.filtrarEventos(dataEvents,cardContainer));

document.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
  checkbox.addEventListener('change', functionCard.filtrarEventos);
});

