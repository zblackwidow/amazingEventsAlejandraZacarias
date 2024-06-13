
let datosDeLaApi;

fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json())
    .then(data => {
        let datosDeLaApi;
        datosDeLaApi = data.events;
        // filtro de eventos pasados
        let eventosPasados = datosDeLaApi.filter(evento => new Date(evento.date) < new Date(data.currentDate));

        // filtro de eventos futuros 
        let eventosFuturos = datosDeLaApi.filter(evento => new Date(evento.date) > new Date(data.currentDate));


    })