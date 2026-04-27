window.onload = function () {
    generateCard();

    document
    .getElementById("generate-btn")
    .addEventListener("click", generateCard);
};

function generateCard() {
    const suits = ["♦", "♥", "♠", "♣"];
    const suitClasses = ["diamond", "heart", "spade", "club"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const randomSuit = Math.floor(Math.random() * suits.length);
    const randomValue = Math.floor(Math.random() * values.length);

    const card = document.getElementById("card");
    const topSuit = document.getElementById("top-suit");
    const bottomSuit = document.getElementById("bottom-suit");
    const cardValue = document.getElementById("card-value");

    card.className = "card " + suitClasses[randomSuit];

topSuit.textContent = suits[randomSuit];
bottomSuit.textContent = suits[randomSuit];
cardValue.textContent = values[randomValue];
}