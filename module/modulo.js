// las imprime
export function card(allCard, cardContainer) {
  cardContainer.innerHTML = ""
  for (let i = 0; i < allCard.length; i++) {
    createCard(cardContainer, allCard[i])
  }
}
// crea las tarjetas 
export function createCard(cardContainer,card) {
  let divCard = document.createElement("div");
  divCard.classList.add("card", "py-3", "mb-2", "ms-2");
  divCard.style.width = "15rem";
  divCard.innerHTML = `<img src="${card.image}" class="card-img-top rounded-top img-card" alt = "${card.name}" >
      <div class="card-body h-25">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.description}</p>
      </div>
      <div class="card-body d-flex justify-content-between align-items-center">
          <h6 class="card-title">Price $ ${card.price}</h6>
          <a href="../pages/details.html?id=${card._id}" class="btn btn-outline-danger">Details</a>

      </div>`

  cardContainer.appendChild(divCard)
}


export function filtrarEventos(data) {
  let searchText = document.getElementById('search').value.toLowerCase();
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  let categoriasSeleccionadas = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.dataset.category);
    }
  });
  let eventosFiltrados = data.filter(function (evento) {
    let coincideConTextoDeBusqueda = evento.name.toLowerCase().includes(searchText) || evento.description.toLowerCase().includes(searchText);
    let coincideConCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
    return coincideConTextoDeBusqueda && coincideConCategoria;
  });

  let cardContainer = document.getElementById('card');
  cardContainer.innerHTML = '';
  if (eventosFiltrados.length === 0) {
    cardContainer.innerHTML = `<div class="alert alert-danger" style="width: 50%" role="alert"> No results were found for your search </div>`
  } else {
    card(eventosFiltrados,cardContainer);
  }
}
