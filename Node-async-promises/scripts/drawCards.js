const drawButton = document.getElementById('draw-card-button');
const cardDisplay = document.getElementById('card-display');

async function initializeDeck() {
  const deckApiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const deckResponse = await fetch(deckApiUrl);
  const deck = await deckResponse.json();
  return deck.deck_id;
}

async function drawCard(deckId) {
  const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  const cardResponse = await fetch(drawCardUrl);
  const cardData = await cardResponse.json();
  return cardData.cards[0];
}

async function main() {
  try {
    const deckId = await initializeDeck();
    drawButton.addEventListener('click', async () => {
      const card = await drawCard(deckId);
      if (card) {
        cardDisplay.innerHTML += `<p>${card.value} of ${card.suit}</p>`;
      } else {
        drawButton.disabled = true;
        drawButton.textContent = "No more cards";
      }
    });
  } catch (err) {
    console.error(err);
  }
}

main();
