// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let cars = ['Audi RS2', 'BMW 1M', 'Porsche 996 GT3', 'Lamborghini Countach', 'Ferrari 599', 'Lexus LFA', 'Mclaren F1', 'Bugatti EB110', 'Aston Martin Lagonda', 'TVR Sagaris']
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
book = {
    title: 'Book-Title1',
    pageCount: 237,
    genre: 'Horror'
}
console.log(book);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
book2 = {
    title: 'Book-Title1',
    pageCount: 237,
    genre: 'Horror',
    authors: [
        {name: 'Mark', age: 37},
        {name: 'Andrew', age: 55},
        {name: 'Bogdan', age: 23}
    ],
}
console.log(book2);


//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'},
    {name: 'Andrew', username: 'and123', password: 'a228a228'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -3
    if (a !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 36
if (time >= 1 && time <= 14){
    console.log('first');
} else if (time >= 15 && time <= 29){
    console.log('second');
} else if (time >= 30 && time <= 44){
    console.log('third');
} else if (time >= 45 && time <= 59){
    console.log('fourth');
} else{
    console.log('enter a minute from 0 to 59');
}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 8;
if (day >= 1 && day <= 10){
    console.log('first decade');
} else if (day >= 10 && day <= 20){
    console.log('second decade');
} else if (day >= 20 && day <= 31) {
    console.log('third decade');
} else{
    console.log('enter a day from 1 to 31');
}


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
let p = 2
switch (p){
    case '1':
        console.log(week[0]);
        break

    case '2':
        console.log(week[1]);
        break

    case '3':
        console.log(week[2]);
        break

    case '4':
        console.log(week[3]);
        break

    case '5':
        console.log(week[4]);
        break

    case '6':
        console.log(week[5]);
        break

    case '7':
        console.log(week[6]);
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('enter a 1 number')
let number2 = +prompt('enter a 2 number')
if (number1 > number2){
    console.log(number1);
} else if (number2 > number1){
    console.log(number2);
} else if (number1 === number2){
    console.log('number1 and number2 are equal');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = '';
let res = x || 'default';
console.log(res);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log('super');
} if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log('super');
} if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log('super');
} if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log('super');
} if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log('super');
} if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log('super');
}
