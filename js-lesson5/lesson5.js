//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a, b) => a * b;
console.log(square(4, 7));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (radius) => {
    return 3.14 * radius * radius;
}
console.log(circle(7));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cyl = (r, h) => {
    return (5 * 3.14 * r * r) + (5 * 3.14 * r * h);
}
console.log(cyl(5, 9));


// - створити функцію яка приймає масив та виводить кожен його елемент
const a = (a) => {
    for (const element of a) {
        console.log(element);
    }
}
a([1, 2, 3, true, false, 'a', 'b', 'c']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const p = (text) => {
    document.write(`<p> ${text} </p>`);
}
p('hello world')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ul = (text) => {
    document.write(`<ul> <li> ${text} </li> <li> ${text} </li> <li> ${text} </li> </ul>`);
}
ul('hello world')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ul2 = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}
ul2('hello world', 0)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const aaa = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li> ${arrElement} </li>`);
    }
    document.write(`</ul>`);
}
aaa([1, 2, 3, true, false, 'a', 'b', 'c'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'maks', age: 38},
    {id: 2, name: 'oleg', age: 52},
    {id: 3, name: 'katya', age: 44},
    {id: 4, name: 'diana', age: 23},
    {id: 5, name: 'masha', age: 37},
    {id: 6, name: 'mark', age: 21},
    {id: 7, name: 'lilya', age: 32},
]
const us = (m) => {
    for (let user of m) {
        document.write(`<div> <p>${user.id}</p> 
                              <p>${user.name}</p> 
                              <p>${user.age}</p> 
                              <br>
                        </div>`)
    }
}
us(users)


// - створити функцію яка повертає найменьше число з масиву
const minN = (num) => {
    let min  = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i]
        }
    }
    return min
}
console.log(minN([34, 56, 43, 99, 23, 51]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i]
    }
    return suma
}
console.log(sum([43, 555]))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const num1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = num1
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const cur of currencyValues) {
        if (cur.currency === exchangeCurrency) {
            return sumUAH / cur.value
        }
    }
}
const res = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(res);