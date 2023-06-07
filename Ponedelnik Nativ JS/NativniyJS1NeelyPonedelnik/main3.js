// объекты

const developer = {
    name: 'Alex',
    age: 24,
    isMan: true,
    sayHi() {
        console.log('Hi')
    }
}
//console.log(developer.age)  //

const developer1 = new Object({
    name: 'Alex',
    age: 24,
    isMan: true,
    jsFeature: 'jsFeature',
    sayHi() {
        console.log('Hi')
    }
})
// console.log(developer1.sayHi())
// console.log(developer1['name'])
// console.log(developer1['age'])
//
// developer1.city = 'New York'  // -----добавление нового свойства
developer1.age = 25              // ----изменение возраста
delete developer1.isMan        // оператор удаление
developer1['secret-key'] = 'any text'    // добавить ключ значение
const jsFeature = 'jsFeature'         // добавление нового ключ значение
//console.log(developer1)

const newUser = (name, age) => {
    return {
        name,
        age
    }
}
//console.log(newUser('Vitaly', 29))  // присваивание в консоли

// сравнение объектов
const a = {}
const b = {}
//console.log(a===b)

let c = a
//console.log(a === c)

const user1 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}
const user2 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}
//console.log(user1 === user2)                    // false
//console.log(user1.name === user2.name)           // true

const user3 = user1
user3.name = 'Victor'
// console.log(user3.name)
// console.log(user1.name)
// console.log(user3.name === user1.name)
//console.log(user3 === user1)