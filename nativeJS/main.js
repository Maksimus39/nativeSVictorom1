//                                          Переменные


// Как объявить переменную - var let const
// JavaScript - регистрозависимый язык, что означает, что регистр букв в названиях
// переменных, функций и т.д. имеет значение. Например, переменная "myVariable" и
// "myvariable" считаются разными.


//                                          Отличия let и const
// Переменную, объявленную с помощью let можно менять.
let myNumber = 5;
myNumber = 6;
console.log(myNumber); // значение переменной num изменится

// Переменную с const нельзя изменять.
const yourNumber = 5;
yourNumber = 6;
console.log(yourNumber); // будет ошибка

// По этой же логике константу нельзя создавать пустой.
const age;
console.log(age); // будет ошибка
let abc;
console.log(abc); // значение будет undefined

// Когда мы объявляем переменную с помощью const и присваиваем ей объект, мы
// не можем переопределить эту переменную новым значением, но мы можем
// изменять свойства объекта.

const user = { name: 'Pavel', age: 25 };
user = { name: 'Alex', age: 28 }; // TypeError: Assignment to constant variable.
user.age = 26; // это допустимо

//                                           Отличия let и var
// Переменную с var можно объявлять повторно с таким же именем
var num = 10;
var num = 15;
console.log(num); // переменная просто перезапишется и будет 15

let num = 10;
let num = 15;
console.log(num); // с let будет ошибка, так как нельзя создавать переменные с одинаковым именем


// Область видимости.
// У let она блочная, а у var функциональная. То есть let ограничивается
// ЛЮБЫМИ ФИГУРНЫМИ скобками, а var только функцией.
{
    let num = 1;
    console.log(num); // тут переменная будет видна
}
    console.log(num); // тут уже будет ошибка


{
    var num = 1;
    console.log(num); // тут переменная будет видна
}
    console.log(num); // и тут тоже переменная будет видна


    function func() {
    var num = 1;
    console.log(num); // тут переменная будет видна
}
    console.log(num); // тут уже будет ошибка


//                                                Hoisting
// Hoisting - это механизм в JavaScript, при котором объявления переменных и функций "поднимаются" 
// вверх текущей области видимости перед выполнением кода.
// В результате этого переменные, объявленные с помощью var могут использоваться до того, как они объявлены в коде.
console.log(x);
var x = 10; // undefined

foo();

function foo() {
  console.log('Привет, я функция!');
}

//                                                Типы данных
// В JavaScript существует 8 типов данных - примитивы (7) и объект (1)

// let num = 1; // number
// let str = "Hello"; // string
// let isMan = true; // boolean
// let empty = null; // *null
// let abc; // undefined
// let sym = Symbol(123); // symbol
// let bigInt = 1n; // bigInt
// let obj = {}; // object


// typeof - оператор, который помогает определить тип данных переменной

console.log(typeof Infinity); 
console.log(typeof null); 
console.log(typeof NaN); 
console.log(typeof function() {}); 
console.log(typeof []);
console.log(typeof (typeof "hello"));
console.log(Array.isArray([]));
console.log(Array.isArray({}));


// Операторы - математические, сравнения, логические и условные 

//                                            Математические операторы
// +
// -
// /
// *
// ** - возведение в степень
// % - остаток от деления
console.log(10 % 2); // 0
console.log(7 % 2); // 1
console.log(5 ** 2); // 25
console.log(Math.pow(5, 2)); // 25


//                                      Конкатенация и шаблонные строки
// В JavaScript есть два способа объединения строк: конкатенация строк и использование шаблонных строк

// 1
let str1 = 'Hello';
let str2 = 'World';
let result = str1 + ' ' + str2;
console.log(result); // 'Hello World'

// 2
let name = 'John';
let agee = 30;
let sms = `My name is ${name} and I'm ${agee} years old`;
console.log(sms); // 'My name is John and I'm




let newAge = "30"
console.log(+newAge)
console.log(Number(newAge))


console.log(1 + "2" + "2")
console.log(1 + +"2" + "2")
console.log(1 + -"1" + "2")
console.log(+"1" + "1" + "2")
console.log("A" - "B" + "2")
console.log("A" - "B" + 2)


//                                              Операторы сравнения
// >
// <
// >=
// !==
// ==


// == (нестрогое равно) и === (строгое равно)
 
// == - сравниваются данные и идет преобразование
// === - учитывает тип данных при сравнении


// falsy значения
    


/*
1. Что вернут данные выражения?
 */

console.log(10 == '10');  
console.log(10 === '10'); 

console.log(true == 1); 
console.log(false === 0); 
console.log([] == ''); 
console.log({} == ''); 
console.log(10 > 10);  
console.log(5 >= 5); 

console.log('5px' > 3);  
console.log('A' > 'a');  
console.log('B' < 'b'); 

//                                                  Логические операторы
// &&  - и
// ||  - или
// ! - наибольший приоритет (не)

// console.log(10 && 2)        // 2
// console.log(0 && 1)         // 0
// console.log(23 || 7)        // 23
// console.log(0 || 9)         // 9


// Примеры из React
//let result = false
//<props.result && <Todolists/>>
//=> props.onChange && props.onChange(e.currentTarget.value)


//<button disabled={error1 || error2 || error3}/>
//let guestName = props.name || "Guest"
//{guestName}
//return result || "No data"


console.log(0 || 1 && 4)    
console.log(0 && 2 || 8)    

/*
1. Если a = true и b = true, то что вернут выражения:
 */

const a = true
const b = true

console.log(a && b)        
console.log(!a && b)     
console.log(a && !b)      
console.log(!(a && b))   
console.log(!(!a && !b))   


// 2. Если a = true и b = true, то что вернут выражения:
// const a = true
// const b = true

// console.log(a || b)       
// console.log(!a || b)      
// console.log(a || !b)     
// console.log(!a || !b)     
// console.log(!(a || b))   
// console.log(a || b)       
// console.log(!(!a || !b))  




// Инкремент и декремент
let num = 5

console.log(num++) // 5
console.log(--num) // 5
console.log(++num) // 6
console.log(num--) // 6
console.log(num) // 5


//                                           Условные операторы

// Выведи в консоль, если у пользователя достаточно денег для покупки товара, то "Вы можете купить этот товар", 
// если нет, то - "Недостаточно средств на балансе".
// Решить с помощью if else и тернарного оператора
const userBalance = 100;
const productPrice = 50;


// if else


// Тернарный оператор


// Также возможно использование множественных тернарных операций.
// Напишите код, который будет выводить в консоль сообщение, соответствующее возрасту:
// Если возраст меньше 18 лет, выведите сообщение "Вы еще молоды, вам нужно учиться!".
// Если возраст от 18 до 60 лет включительно, выведите сообщение "Вам еще работать и работать!".
// Если возраст больше 60 лет, выведите сообщение "Вы уже на пенсии!".




// Напишите функцию, которая проверяет, вошел ли пользователь в систему, и выводит соответствующее сообщение в 
// консоль, если isLoggedIn - true, то "Вы вошли в систему", иначе - "Пожалуйста, войдите в систему"
const checkLoginStatus = (isLoggedIn) => {
 
}

checkLoginStatus(true);


// Switch
// Напишите функцию, которая будет проверять значение переменной genre, и выводить в консоль информацию о фильме в 
// зависимости от его жанра.
function getFilmInfo(genre) {
  
}

getFilmInfo('drama');


// Циклы - while | do while | for

// let a = 1
// while (true) {
// a++
// }

// let firstValue = 5
// while (firstValue <10) {
//     firstValue++
// }

// let result = '';
// let i = 0;
// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);

for(let i = 0; i < 5; i++) {
  
}

// 1. Выведи в консоль все целые числа от 10 до 1 в обратном порядке:
// for () {
//   console.log(i);
// }


// 2. Вывести в консоль таблицу умножения на 7 в виде: "7 x 1 = 7", "7 x 2 = 14", ..., "7 x 10 = 70".
// for () {
   
// }


// 3. Вывести в консоль все нечетные числа от 1 до 20.
// for () {

// }


// 4. Вывести в консоль числа от 0 до 100 - каждое пятое число.
// for () {
   
// }


//                                                 Функции
// Функции позволяют писать код, который можно повторно переиспользовать.
// В JavaScript функции должны именоваться с использованием CamelCase. Обычно функцию называют с использованием 
// глагола (действие)


// Виды функций - Есть 3 вида функций:
// Function Declaration
// Function Expression
// Arrow Function 

// 1. Function Declaration-это способ определения функции, когда ключевое слово function используется в начале 
// выражения. Функция, определенная таким образом, может быть вызвана до ее определения, благодаря механизму 
// hoisting.
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); 

// 2. Function Expression-это способ определения функции, когда функция создается внутри выражения, например, 
// присваивания переменной. Функцию, определенную таким образом, можно вызвать только после ее определения.
const sum = function(a, b) {
    return a + b;
  };
  
  console.log(sum(2, 3));

// 3. Arrow Function-это новый способ определения функций, добавленный в ECMAScript 6. 
// Стрелочные функции имеют более компактный синтаксис и автоматически привязывают this к текущей области видимости.
const sum = (a, b) => {
   return a + b
};

console.log(sum(2, 3));


const sum2 = (a, b) => a + b;

console.log(sum2(2, 3));


// Обычно функция что-то должна возвращать. Функция без return ничего не возвращает, то есть undefined.

// Значение по умолчанию для параметров
function sum(a = 10, b = 7) {
    return a + b;
  }
  
  console.log(sum(10, 2)); 

// Про arguments
// arguments - это псевдомассив в JavaScript, который содержит все аргументы, переданные в функцию.
// Этот объект похож на массив, но не имеет методов массива, таких как push или pop.

// 1
function greet(name, message) {
    if (arguments.length === 1) {
      message = 'Привет';
    }
    console.log(`${message}, ${name}!`);
  }
  
greet('Вася'); // Привет, Вася!
greet('Петя', 'Здравствуйте'); // Здравствуйте, Петя!

// 2
function sayHi() {
    for (let i = 0; i < arguments.length; i++) {
      console.log( "Привет, " + arguments[i] );
    }
  }
  
sayHi("Винни", "Пятачок");