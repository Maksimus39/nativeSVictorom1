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

// самодельный метод map

const selfMadeMap = (array, elMapFn) => {
    const result=[]
    for (let i = 0; i < array.length; i++) {                          // тело функции её работы
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map((st) => ({name: st.name, scores: st.scores})))
console.log(selfMadeMap(students, (st)=>({name: st.name, scores: st.scores})))


