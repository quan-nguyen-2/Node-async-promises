// Part 1: Number Facts using Async/Await

// 1. Single fact about a favorite number
const favoriteNumber = 7;
const singleFactUrl = `http://numbersapi.com/${favoriteNumber}?json`;

async function getNumberFact() {
  try {
    const response = await fetch(singleFactUrl);
    const data = await response.json();
    document.body.innerHTML += `<p>${data.text}</p>`;
  } catch (err) {
    console.error(err);
  }
}

getNumberFact();

// 2. Multiple numbers in a single request
const multipleNumbersUrl = `http://numbersapi.com/3,9,15?json`;

async function getMultipleNumberFacts() {
  try {
    const response = await fetch(multipleNumbersUrl);
    const data = await response.json();
    for (let key in data) {
      document.body.innerHTML += `<p>${data[key]}</p>`;
    }
  } catch (err) {
    console.error(err);
  }
}

getMultipleNumberFacts();

// 3. Four facts about a favorite number
async function getFourNumberFacts() {
  try {
    const factPromises = [];
    for (let i = 0; i < 4; i++) {
      factPromises.push(fetch(singleFactUrl).then(response => response.json()));
    }
    const facts = await Promise.all(factPromises);
    facts.forEach(fact => {
      document.body.innerHTML += `<p>${fact.text}</p>`;
    });
  } catch (err) {
    console.error(err);
  }
}

getFourNumberFacts();
