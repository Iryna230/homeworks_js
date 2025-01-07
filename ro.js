function pow(x, y) {
 // Ініціалізуємо результат
    let result = 1;
    //Виконуємо цикл y разів
    for (let i = 0; i < y; i++) {
    result *= x; // Множимо result на x
    }
    // Повертаємо результат
    return result;
    }
    // Приклад виклику функції
    console.log(pow(2, 3)); // Виведе: 8
  
    

       
       