// Part 1: Number Facts using Promises

// 1. Single fact about a favorite number
const favoriteNumber = 7;
const singleFactUrl = `http://numbersapi.com/${favoriteNumber}?json`;

fetch(singleFactUrl)
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML += `<p>${data.text}</p>`;
  })
  .catch(err => console.error(err));

// 2. Multiple numbers in a single request
const multipleNumbersUrl = `http://numbersapi.com/3,9,15?json`;

fetch(multipleNumbersUrl)
  .then(response => response.json())
  .then(data => {
    for (let key in data) {
      document.body.innerHTML += `<p>${data[key]}</p>`;
    }
  })
  .catch(err => console.error(err));

// 3. Four facts about a favorite number
const fourFactsPromises = [];
for (let i = 0; i < 4; i++) {
  fourFactsPromises.push(fetch(singleFactUrl).then(response => response.json()));
}

Promise.all(fourFactsPromises)
  .then(facts => {
    facts.forEach(fact => {
      document.body.innerHTML += `<p>${fact.text}</p>`;
    });
  })
  .catch(err => console.error(err));
