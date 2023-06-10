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
const [, ...rest] = arr

const obj = {
    name: 'Max',
    age: 39
}
const {...rest1} = obj
// console.log(rest)
// console.log(rest1)                              // этот метод неудобен тем что он зависит от количества запятых массива

const func1 = (...rest3) => {
    // console.log(rest3)
}
func1(1, 2, 3, 4, 5)

// 5. сравнение массивов
const newArr = arr
//newArr[0] = 100200
//console.log(newArr === arr)

const newCopy = [...arr]
newCopy[0] = 100200
// console.log(newCopy[0])
// console.log(arr[0])
// console.log(newArr[0])

// 6. Базовые операции с массивами (добавление , удаление)
// push, unshift

const resPush = arr.push(1000)
const resUnshift = arr.unshift(2000)
// console.log(resPush)                              // добавляет в конец
// console.log(resUnshift)                           // добавляет в начало
// console.log(arr)

// pop, shift
arr.pop()
const resPop = arr.pop()
console.log(arr)          // удаление последнего и возврат полученного массива
console.log(resPop)       // показывает что удалили


// какая операция затратнее.
