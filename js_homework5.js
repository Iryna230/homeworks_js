// Крок 1: Створюємо об'єкт із послугами
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн"
};

// Додаємо додаткову послугу
services['Розбити скло'] = "200 грн";

// Функція для отримання числового значення вартості
function extractPrice(value) {
    return parseInt(value.slice(0, -4)); // Видаляємо останні 4 символи (" грн") і перетворюємо на число
}

// Крок 2: Функція для підрахунку загальної вартості
function price(services) {
    let total = 0;
    for (let key in services) {
        total += extractPrice(services[key]); // Використовуємо метод slice
    }
    return total + " грн";
}

// Крок 3: Функція для пошуку мінімальної вартості
function minPrice(services) {
    let prices = Object.values(services).map(value => extractPrice(value));
    return Math.min(...prices) + " грн";
}

// Крок 4: Функція для пошуку максимальної вартості
function maxPrice(services) {
    let prices = Object.values(services).map(value => extractPrice(value));
    return Math.max(...prices) + " грн";
}

// Тестуємо функції
console.log("Загальна вартість: " + price(services)); // Виведе загальну вартість
console.log("Мінімальна вартість: " + minPrice(services)); // Виведе мінімальну ціну
console.log("Максимальна вартість: " + maxPrice(services)); // Виведе максимальну ціну