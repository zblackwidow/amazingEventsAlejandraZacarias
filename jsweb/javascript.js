// import * as functionCard from "../module/modulo.js";
const urlApi = "https://aulamindhub.github.io/amazing-api/events.json";

const { createApp } = Vue

const app = createApp({

  data() {
    return {
      events: [],
      search: '',
      filteredEvents: [],
      category: []
    }
  },
  created() {

  },
  methods: {
    traerdata(url) {
      fetch(url).then(response => response.json().then(data => {
        this.events = data.events
        console.log(this.events);
      }))
    }
  },
  computed: {

  }


}).mount('#app')
// let dataEvents = [];

// fetch(urlApi)
//   .then(response => response.json())
//   .then(data => {
//     dataEvents = data.events;
//     functionCard.card(dataEvents, cardContainer);
//     functionCard.filtrarEventos(dataEvents);
//   });

// let cardContainer = document.getElementById("card");

// document.querySelectorAll('input[type="checkbox"]').forEach(checkbox =>
//   checkbox.addEventListener("change", () => functionCard.filtrarEventos(dataEvents))
// );

// let search = document.getElementById("search");

// search.addEventListener("input", () => functionCard.filtrarEventos(dataEvents));
