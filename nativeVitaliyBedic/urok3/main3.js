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
//const [, , , num4] = arr
//console.log(num4)

// что сидит в rest в объекте и в массиве?
// const [, ...rest] = arr
//
// const obj = {
//     name: 'Max',
//     age: 39
// }
//const {...rest1} = obj
// console.log(rest)
// console.log(rest1)                              // этот метод неудобен тем что он зависит от количества запятых массива

// const func1 = (...rest3) => {
//     // console.log(rest3)
// }
// func1(1, 2, 3, 4, 5)

// 5. сравнение массивов
//const newArr = arr
//newArr[0] = 100200
//console.log(newArr === arr)

// const newCopy = [...arr]
// newCopy[0] = 100200
// console.log(newCopy[0])
// console.log(arr[0])
// console.log(newArr[0])

// 6. Базовые операции с массивами (добавление , удаление)
// push, unshift

// const resPush = arr.push(1000)
// const resUnshift = arr.unshift(2000)
// console.log(resPush)                              // добавляет в конец
// console.log(resUnshift)                           // добавляет в начало
// console.log(arr)

// pop, shift
//arr.shift()                // удаляет первый и возвращает полученный
//const resShift=arr.shift() // вывод первого удалённого значения из массива
//console.log(resShift)
//arr.pop()
//const resPop = arr.pop()
// console.log(arr)          // удаление последнего и возврат полученного массива
// console.log(resPop)       // показывает что удалили


// какая операция затратнее, добавление так как всем придётся поменять индексы
// delete -----!!!! никогда не использовать

// delete arr[0]
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr)

// 7. Итерации по массивам
const developer1 = {
    name: 'Airat',
    salary: 2000
}

const developer2 = {
    name: 'Vanya',
    salary: 3000
}
const allDevelopers = [{...developer1}, {...developer2}]
//console.log(allDevelopers)


// цикл for
const names = ['airat', 'vasya', 'kiril', 'iliy', 'vitalya']
for (let index = 0; index < names.length; index++) {
    // console.log(names[index])
}

// for of для массивов
for (let name of names) {
    //  console.log(name)
}

//for in - для объектов
for (key in developer1) {
    // console.log(key )
}

// 8. методы массивов
// forEach, map, filter

// forEach
names.forEach((value, index, array) => {
    // console.log('value', value)
    // console.log('index', index)
    // console.log('array', array)
    // console.log('------------')
})
names.forEach((value) => {
    // console.log(value)
})

const newArray = []
const resForEach = names.forEach((value) => {
    newArray.push(value + '123')
})
// console.log(newArray)
// console.log(names)

const upperFirstElement = names.map(el => el[0].toUpperCase() + el.slice(1))
//console.log(upperFirstElement)


// filter-----------------------------------------------------------------------------------------------
const filteredNames = names.filter((value, index, array) => value[0] === 'v')  // этот метод имутабельный и мы задаём условие
// console.log(filteredNames)
// console.log(names)


// reduce
const numbers = [1, 2, 3, 4, 5]
//const resReduce=numbers.reduce((колбек)=>{},начальное значение)


const resReduce = numbers.reduce((acc, value, index, array) => {
    // console.log('acc----', acc )
    // console.log('value----', value)
    // console.log('index----', index)
    // console.log('array----', array)
    // return (acc + value)
    // console.log('-----------------------------')
}, 10)


// 8. методы изменяющие исходный массив(мутирующие)
// push, pop, shift, unshift, reverse, fill, splice, sort

//----------------------------------------Задачи-----------------------------------------------------------//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const res1 = nums.reduce((acc, item) => acc + item, '')

// console.log(res1)
// console.log(typeof res1)

//выбрать чётные вычислить их квадраты и отобрать из них числа больше 50
//const numbers= [1,2,3,4,5,6,7,8,9,10]

const checkNumIsEven = (num) => {
    return num % 2 === 0
}
//console.log(checkNumIsEven(100))

const transformNumSquare = (num) => {
    //return num **2
    //return num * num
    return Math.pow(num, 2)
}
//console.log(transformNumSquare(50))

const checkNumIsGreaterThanAnotherNum = (num) => {
    return num > 50
}
//console.log(checkNumIsGreaterThanAnotherNum(10))


// решение через map/filter
// const result = numbers
//     .filter(checkNumIsEven)
//     .map(transformNumSquare)
//     .filter(checkNumIsGreaterThanAnotherNum)
//console.log(result)




// решение с помощью reduce
const result = numbers.reduce((acc, value)=>{
    if(value % 2 === 0) {
       const squared = transformNumSquare(value)
        return squared
    }
},[])
console.log(result)