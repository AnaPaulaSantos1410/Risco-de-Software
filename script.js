function createCard(title, description, imageUrl, footer) {
  const cardContainer = document.getElementById('card-container');
  
  const card = document.createElement('div');
  card.classList.add('card');

  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    card.appendChild(img);
  }

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;
  card.appendChild(cardDescription);

  if (footer) {
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('footer');
    cardFooter.textContent = footer;
    card.appendChild(cardFooter);
  }

  cardContainer.appendChild(card);
}

function showMessage() {
  alert('Hello Joshua!');
}

createCard('Oi Jose', 'Clica no botao', '', '');

document.getElementById('customButton').addEventListener('click', showMessage);