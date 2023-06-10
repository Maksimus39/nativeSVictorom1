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

console.log('5px' > 3);         // false  // 5px не преобразоваться  в число и получается Nan
console.log('5px' < 10);        // false
console.log('A' > 'a')          // false - маленькие символы юникода идут после больших тоесть его порядковый номер в пересчёте на цифры больше
console.log('B' < 'b')          // true

console.log('5px' > 'pxyt')

// логические операторы
// && - запинается на лжи :)
// || - запинается на правде :)

// console.log(10 && 2)              // 2
// console.log(0 && 1)                // 0
// console.log(23 || 7)               // 23
// console.log(0 || 9)               // 9

// ! - наибольший приоритет
// console.log(0 || 1 && 4)         // 4
// console.log(0 && 2 || 8)         // 8


// 1. если a = true и b = true, то что вернут выражения:
//a && b                      true
// !a && b                    false
// a && !b                    false
// !a && !b                   false
// !(a && b)                  false
// ! (!a && !b)               false


//2. если a = true и b = true, то что вернут выражения:
//a || b                // true
// !a || b              // true
//a || !b               // true
// !a || !b             // false
// !(a || b)             // false
// a || b                // true
// !(!a || !b)           // true

/*3. заданы переменные
const a = '':                 // false
const b = 9:                  //  true
const c = null:*/               // false
// что вернут выражения
// !!(!a || !b && !c)         true
// !!(a || !b && !c)           false
// !!(a && !b || c)           false
// (!a && b && !c)           false
// !(a || !b && !c)           true

const a1 = ((10 > 20) ? 'true' : 'false')
console.log(a1)

// оператор нулевого слияния??
let username = 'Max'                         // undefined null
const greeting = `Привет,${username ?? 'Гость'}!`;
console.log(greeting)


// Switch
const checkActionType = (actionType) => {
    switch (actionType) {
        case ('FETCH_DATA'):
            return ('1')
            break
        case ('LOADING_DATA'):
            return ('2')
        case ('ERROR_DATA'):
            return ('3')
        case ('GET_CURRENT_LOCATION'):
            return ('4')
        case ('ADD_NOTE'):
            return ('5')

        default:
            return ('Дефолтное состояние ничего не делаем')
    }
}
console.log(checkActionType('LOADING_DATA'))

const getDiscount = (userStatus) => {
    switch (userStatus) {
        case 'vip':
            return ('25%')
        case 'privileged':
            return ('15%')
        case 'clubMember':
            return ('5%')
        default:
            return ('0%')
    }
}
console.log(getDiscount('switch'))

// циклы
// map
const arr = [1, 2, 3, 4, 5, 6, 7]
const res = arr.map((element, index, array) => {
    console.log('element', `${element}  Что нибудь`)
    console.log('index', index)
   // console.log('array', array)
    console.log('=================')
})
console.log(res)

const res1 = arr.filter((el) => el > 3)
console.log(res1)