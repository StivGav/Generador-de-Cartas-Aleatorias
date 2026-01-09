const palos = [
  { name: "diamond", symbol: "♦" },
  { name: "heart", symbol: "♥" },
  { name: "spade", symbol: "♠" },
  { name: "club", symbol: "♣" }
];

const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const topSuit = document.createElement("div");
  topSuit.classList.add("suit", "top");

  const value = document.createElement("div");
  value.classList.add("value");

  const bottomSuit = document.createElement("div");
  bottomSuit.classList.add("suit", "bottom");

  card.appendChild(topSuit);
  card.appendChild(value);
  card.appendChild(bottomSuit);

  return { card, topSuit, value, bottomSuit };
}

// Función para generar una carta aleatoria
function generateCard() {
  const randomPalo = palos[Math.floor(Math.random() * palos.length)];
  const randomValor = valores[Math.floor(Math.random() * valores.length)];

  const app = document.getElementById("app");
  app.innerHTML = "";

  const { card, topSuit, value, bottomSuit } = createCard();

  topSuit.textContent = randomPalo.symbol;
  bottomSuit.textContent = randomPalo.symbol;
  value.textContent = randomValor;

  card.classList.add(randomPalo.name);

  app.appendChild(card);
}

document.addEventListener("DOMContentLoaded", generateCard);
setInterval(generateCard, 10000);