// Объекты:

// -object


// -array
// -function

const str = 'string'  // new String()
str.toLowerCase()
//console.log(str.toLowerCase())

const obj = {}  // new Object()-#12

//const obj2 = obj // мы создали объект2 который ссылается на ячейку памяти объекта1 и это ссылочный тип данных

const obj2 = {} // new Object()-#13
// console.log(obj === obj2)
// console.log({} === {})

// -------------------------------имъютабельный тип данных--------------------------------------------------------
// структура => делаем копию => вносим изменения в копию => используем копию

const fr = ['Donald', 'Max']
const user = {
    name: 'Bob',
    age: 23,
    friends: fr
}
// CRUD
// create - red - update - delete

// --------------------------------------create--------------------------------------------------------------
const copyUser = {
    ...user,
    friends: [...user.friends]
}
//console.log(copyUser)


const superUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Grenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',

    }
}
const copySuperUser = {...superUser}
//console.log(copySuperUser)

const users = [
    {
        id: 1,
        name: 'Alex',
        isStudents: true,
    },
    {
        id: 2,
        name: 'Bob',
        isStudents: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudents: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudents: true,
    },
]

const copyUsers = [...users]

// ----------------------------------- update----------------------------------------------------add new student ----------------добавление нового студента
const newStudent = {
    id: 5,
    name: 'Hunter',
    isStudents: true
}
//const updatedStudents =[...users,newStudent]
//console.log(updatedStudents)


// -------------------------------------delete------------------------------------------------------------------------------------------------------------------
const updatedStudents = users.filter(st => st.id !== 4)
//console.log(updatedStudents === users) // false

const superUser2 = {
    ...superUser,
    address: {...superUser.address, city: 'Lipeck'}
}
//console.log(superUser2)

const superUser3 = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {...superUser.address.geo, lat: '-41.3159', lng: '81.1496'}
    }
}
console.log(superUser3)


























