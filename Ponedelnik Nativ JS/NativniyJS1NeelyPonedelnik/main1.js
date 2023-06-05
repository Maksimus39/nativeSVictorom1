// типы данных
//1. примитивы
// 2. объекты

const string = '123'
const number = 123
const boolean = true
const bigint = 10n
const nullType = null
const undefinedType = undefined
//const symbolType=symbol

const obj = {} // []
// инкремент и декремент

// операнды и операторы
// унарный - один операнд(к чему применяем)
// бинарный - бинарный 2 операнда
// тернарный - три операнда

// typeof - тип данных в строковом виде
console.log(typeof (typeof null))
// инкремент и декремент
let index = 1

console.log(index++)  // 1
console.log(++index) //3
console.log(++index) //4
console.log(index++) //4
console.log(index) // 5

// операторы сравнения

// == и ===
// == - сравниваются и идёт преобразование
// === - учитывается тип данных при сравнении


// falsy значение
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean([]))
// ''
// 0
// Nan
// undefined
// null
// false


// 1. что вернут данные выражения

console.log(5 == 5);            // true
console.log(5 == '5');          // true

console.log(5 === 5);           // true
console.log(5 === '5');         // false

console.log(5 > 5);             // false
console.log(5 < 5);             // false
console.log(5 >= 5);            // true
console.log(5 <= 5)          // true

console.log('5px' > 3);         // false
console.log('5px' < 10);        // false
console.log('A' > 'a')          // false
console.log('B' < 'b')          // true

