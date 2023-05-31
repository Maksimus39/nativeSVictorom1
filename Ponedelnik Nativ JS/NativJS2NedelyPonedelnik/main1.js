let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
]
//C => [...students, newStudents]
//R => map (obj => jsx elements)
//U => map (conditional mapping: obj => updObj)
//D => filter

// CRUD - ОПЕРАЦИИ БУДЕМ ОСУЩЕСТВЛЯТЬ С НАШИМ СПИСКОМ СТУДЕНТОВ
// ['Bob', 'Alex', ....] - складывание имён массивов
// Сегодняшнее занятие это методы полифилов которые заменяют методы массивов. -------------------------------------------------------------------------------------------------------------


// map ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map(st => st.name))
console.log(getNames(students))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const getSimpleStudents = (array) => {
    const result = []                                                  // вывести новый массив
    const elMapFn = (st) => ({name: st.name, scores: st.scores})      // условие в поставленной функции
    for (let i = 0; i < array.length; i++) {                          // тело функции её работы
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}
console.log(getSimpleStudents(students))                         // вывод результата в консоль

// самодельный метод map -----------------------------------------------------------------------------------------------------------------------------------------------------

const selfMadeMap = (array, elMapFn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {                          // тело функции её работы
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map((st) => ({name: st.name, scores: st.scores})))
console.log(selfMadeMap(students, (st) => ({name: st.name, scores: st.scores})))

// filter самодельный ---------------------------------------------------------------------------------------------------------------------------------------

const selfMadeFilter = (array, conditionFn) => {  // true || false
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (conditionFn(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(students.filter(st => st.scores >= 100))                                         // это метод filter с условием
console.log(selfMadeFilter(students, (st => st.scores >= 100)))               //  а это самодельный метод filter

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// воспроизведение работы метода push -----------------------------------------------------------------------------------------------------------------------------
const selfMadePush = (array, ...els) => {              // ...els - рест оператор он раскукоживает функцию и остальные параметры
    console.log(els)
    for (let i = 0; i < els.length; i++) {
        array[array.length] = els[i]
    }
    const result = [...array, ...els]
    return result.length
}
const arr = [1, 2, 3, 4, 5]
//console.log(selfMadePush(arr, 6, 7, 8))
console.log(arr.push(6, 7, 8))
console.log(arr)

const selfMadeIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value){
            return true
        }
    }
    return false
}
console.log(arr.includes(4))                                 // это вызов метода массива через точку
console.log(selfMadeIncludes(arr, 4))         // это самодельный вызов аналогичного метода