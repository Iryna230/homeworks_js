const regex = /\b[^Aa]{6,}\b/g;
const text = "Wonderful Happiness Joyful Task Apple";
const matches = text.match(regex);
console.log(matches); // Виведе: ["Wonderful", "Joyful"]