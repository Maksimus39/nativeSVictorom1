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


// map---------------------------------------------------------------------------------------------------------------

const getNames = (array) => {
    const result = []
    const getValuesForResult = (el) => el.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getValuesForResult(array[i])
    }
    return result
}
//console.log(getNames(students))


const getUpdatedStudents = (array) => {
    const result = []
    const getValuesForResult = (el) => ({...el, isStudents: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = getValuesForResult(array[i])
    }
    return result
}
//console.log(getUpdatedStudents(students))

const getMappedArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}
console.log(getMappedArray(students, (el) => el.name))
console.log(getMappedArray(students, (el) => ({...el, isStudents: true})))

const xxl = (el) => el.name
console.log(students.map(xxl))


console.log(students.map((el) => el.name))

//filter------------------------------------------------------------------------

const getFilteredArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(getFilteredArray(students, (el) => el.name >= 21))
console.log(students.filter(st => st.age >= 21))
console.log(students.concat({}))

const myRevers = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}
console.log(myRevers(students))

const mySlice = (array, startIndex, endIndex) => {
    const result = []
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i])
    }
    return result
}
console.log(mySlice(students, 1, 3))

const myIncludes = (array, item) => {
    let result = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            result = true
            break
        }
    }
    return result
}
console.log(myIncludes(students, 1))

const myIndexOf = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return -1
}
console.log(myIndexOf(students, students[0]))

console.log([1, 2, 3[[3, 4]], 5].flat())

