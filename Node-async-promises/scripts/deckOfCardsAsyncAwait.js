// Part 2: Deck of Cards using Async/Await

const deckApiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

// 1. Single card from a new deck
async function drawSingleCard() {
  try {
    const deckResponse = await fetch(deckApiUrl);
    const deck = await deckResponse.json();
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;
    const cardResponse = await fetch(drawCardUrl);
    const cardData = await cardResponse.json();
    const card = cardData.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  } catch (err) {
    console.error(err);
  }
}

drawSingleCard();

// 2. Two cards from the same deck
async function drawTwoCards() {
  try {
    const deckResponse = await fetch(deckApiUrl);
    const deck = await deckResponse.json();
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;
    const cardResponse1 = await fetch(drawCardUrl);
    const cardData1 = await cardResponse1.json();
    const card1 = cardData1.cards[0];
    console.log(`${card1.value} of ${card1.suit}`);
    
    const cardResponse2 = await fetch(drawCardUrl);
    const cardData2 = await cardResponse2.json();
    const card2 = cardData2.cards[0];
    console.log(`${card2.value} of ${card2.suit}`);
  } catch (err) {
    console.error(err);
  }
}

drawTwoCards();
