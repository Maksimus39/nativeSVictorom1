// 1. массивы, как проверить что это массив, способы создания массивов

const arr = [100, 200, 300, 400]

// const arr1 = {
//     0: 100,
//     1: 200,
//     2: 300,
//     3: 400
// }

// 2. Способы достучаться до элементов в массиве

// console.log(arr[2])
// console.log(Array.isArray(arr))   //  с помощью этой записи мы узнаём что работаем с массивом
// console.log(Array.isArray(arr1))   // это не массив а объект

// 3. Свойство length

// console.log(arr.length)
// console.log(arr.length = 2)    // обрезание массива
// arr[123] = 1
// console.log(arr.length)

// получи последний элемент массива с помощью length?
//console.log(arr[arr.length-1])

// какой есть современный метод для этого?
//console.log(arr.at(1))

// 4. деструктуризация массивов, spread, rest

//const [num1, num2, num3, num4] = arr
//console.log(num1, num2, num3, num4)
const [, , , num4] = arr
//console.log(num4)

// что сидит в rest в объекте и в массиве?
const [,  ...rest] = arr



console.log(rest)                              // этот метод неудобен тем что он зависит от количества запятых массива
