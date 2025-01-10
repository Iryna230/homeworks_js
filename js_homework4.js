function checkProbabilityTheory(count) {
    // Ініціалізація змінних
    let evenCount = 0; // Лічильник парних чисел
    let oddCount = 0;  // Лічильник непарних чисел

    // Генерація випадкових чисел
    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число в діапазоні 100-1000
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        // Перевірка парності числа
        if (randomNumber % 2 === 0) {
            evenCount++; // Збільшуємо лічильник парних чисел
        } else {
            oddCount++; // Збільшуємо лічильник непарних чисел
        }
    }

    // Обчислення відсотків
    let evenPercentage = ((evenCount / count) * 100).toFixed(2); // Відсоток парних чисел
    let oddPercentage = ((oddCount / count) * 100).toFixed(2);   // Відсоток непарних чисел

    // Формування результатів за допомогою методів рядків
    let result = "Кількість згенерованих чисел: " + count + "\n";
    result += "Парних чисел: " + evenCount.toString() + "\n";
    result += "Непарних чисел: " + oddCount.toString() + "\n";
    result += "Відсоток парних до непарних: " + evenPercentage + "% до " + oddPercentage + "%";

    // Виведення результатів
    console.log(result);
}

// Виклик функції для перевірки
checkProbabilityTheory(100); // Наприклад, для 100 чисел
