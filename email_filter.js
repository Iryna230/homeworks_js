
var arr = [

    { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },

    { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },

    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" } // Нам такі не підходять

];



var trustedEmails = arr

    .map(obj => obj.email) // Витягуємо всі email'и

    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email)); // Фільтруємо за допомогою регулярного виразу



console.log(trustedEmails);

console.log("Цей текст додано у файл");
