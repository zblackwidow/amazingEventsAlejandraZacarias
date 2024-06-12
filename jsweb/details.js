const urlApi = "https://aulamindhub.github.io/amazing-api/events.json";
fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    let dataEvents = data.events;

    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    let tarjeta = dataEvents.find(evento => evento._id === id);

    let cardContainer = document.getElementById('card');

    let cardContenedor = `
              <img class="img2" src="${tarjeta.image}">
              <div class="texto3">
              <h3>${tarjeta.name}</h3>
              <p>${tarjeta.date} - ${tarjeta.place}</p>
              <p>${tarjeta.description}</p>
            </div>
          `;    

    cardContainer.innerHTML = cardContenedor;
  });
