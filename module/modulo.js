export function createCard(cardContainer, card) {
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
          <a href="/details.html?id=${card._id}" class="btn btn-outline-danger">Details</a>
      </div>`

  cardContainer.appendChild(divCard)
}

