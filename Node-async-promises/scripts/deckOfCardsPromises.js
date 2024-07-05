// Part 2: Deck of Cards using Promises

const deckApiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

// 1. Single card from a new deck
fetch(deckApiUrl)
  .then(response => response.json())
  .then(deck => {
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;
    return fetch(drawCardUrl);
  })
  .then(response => response.json())
  .then(cardData => {
    const card = cardData.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(err => console.error(err));

// 2. Two cards from the same deck
let deckId;

fetch(deckApiUrl)
  .then(response => response.json())
  .then(deck => {
    deckId = deck.deck_id;
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    return fetch(drawCardUrl);
  })
  .then(response => response.json())
  .then(cardData => {
    const card1 = cardData.cards[0];
    console.log(`${card1.value} of ${card1.suit}`);
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    return fetch(drawCardUrl);
  })
  .then(response => response.json())
  .then(cardData => {
    const card2 = cardData.cards[0];
    console.log(`${card2.value} of ${card2.suit}`);
  })
  .catch(err => console.error(err));
